import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import * as redux from 'react-redux';
import configureMockStore from 'redux-mock-store';

import {
    Col,
    Row,
    Card,
    Container,
    Button,
    ButtonGroup,
    Input,
} from '../components'

import { App } from '../App';
import Todo from '../components/Todo/Todo';

const mockSelectors = (state) => {
    const mockStore = configureMockStore()({
        todos: [],
        rec: {
            playing: false,
            recording: false,
            steps: []
        },
        ...state
    });

    jest.spyOn(redux, 'useSelector')
        .mockImplementation(fn => fn(mockStore.getState()));
};

describe('Components', () => {

    describe('Col', () => {
        it('default', () => {
            const col  = shallow(<Col />);

            expect(toJson(col)).toMatchSnapshot();

            expect(col.props().className).toBe('col');
            expect(col.props().style).toEqual({
                justifyContent: 'space-between',
                alignContent: 'center'
            });
        });

        it('expected props', () => {
            const col  = shallow(<Col style={{ padding: 20 }} justify='space-around' align='flex-start' />);
            
            expect(toJson(col)).toMatchSnapshot();

            expect(col.props().className).toBe('col');
            expect(col.props().style).toEqual({
                justifyContent: 'space-around',
                alignContent: 'flex-start',
                padding: 20
            });
        });
    });

    describe('Row', () => {
        it('default', () => {
            const row  = shallow(<Row />);

            expect(toJson(row)).toMatchSnapshot();

            expect(row.props().className).toBe('row');
            expect(row.props().style).toEqual({
                justifyContent: 'space-between',
                alignContent: 'center'
            });
        });

        it('expected props', () => {
            const row  = shallow(<Row style={{ padding: 20 }} justify='space-around' align='flex-start' />);

            expect(toJson(row)).toMatchSnapshot();
            expect(row.props().className).toBe('row');
            expect(row.props().style).toEqual({
                justifyContent: 'space-around',
                alignContent: 'flex-start',
                padding: 20
            });
        });
    });

    describe('Card', () => {
        it('default', () => {
            const card  = shallow(<Card />);
            expect(toJson(card)).toMatchSnapshot();

            expect(card.props().className).toBe('card');
        });

        it('expected props', () => {
            const card  = shallow(
                <Card style={{ padding: 20 }} className='active'>
                    Hello
                </Card>
            );

            expect(toJson(card)).toMatchSnapshot();
            expect(card.props().className).toBe('card active');
            expect(card.props().style).toEqual({ padding: 20 });
            expect(card.text()).toBe('Hello');
        });
    });

    describe('Container', () => {
        it('default', () => {
            const container  = shallow(<Container />);

            expect(toJson(container)).toMatchSnapshot();
            expect(container.props().className).toBe('container');
        });

        it('expected props', () => {
            const container  = shallow(
                <Container style={{ padding: 20 }} className='active'>
                    Hello
                </Container>
            );

            expect(toJson(container)).toMatchSnapshot();

            expect(container.props().className).toBe('container active');
            expect(container.props().style).toEqual({ padding: 20 });
            expect(container.text()).toBe('Hello');
        });
    });

    describe('ButtonGroup', () => {
        it('default', () => {
            const btnGroup = shallow(<ButtonGroup />);

            expect(toJson(btnGroup)).toMatchSnapshot();

            expect(btnGroup.props().className).toBe('btn-group');
        });

        it('expected props', () => {
            const btnGroup  = shallow(
                <ButtonGroup style={{ padding: 20 }} className='active'>
                    Hello
                </ButtonGroup>
            );

            expect(toJson(btnGroup)).toMatchSnapshot();

            expect(btnGroup.props().className).toBe('btn-group active');
            expect(btnGroup.props().style).toEqual({ padding: 20 });
            expect(btnGroup.text()).toBe('Hello');
        });
    });

    describe('Button', () => {
        it('default', () => {
            const btn = shallow(<Button />);

            expect(toJson(btn)).toMatchSnapshot();
            expect(btn.props().className).toBe('btn');
        });

        it('classnames', () => {
            const onClick = jest.fn(e => 'clicked');

            const btn  = shallow(
                <Button 
                    style={{ padding: 20 }} 
                    className='active' 
                    color='danger'
                    circ
                    rounded
                    onClick={onClick}
                >
                    Hello
                </Button>
            );

            expect(toJson(btn)).toMatchSnapshot();

            expect(btn.props().className).toBe('btn active danger circ rounded');
            expect(btn.props().style).toEqual({ padding: 20 });
            expect(btn.text()).toBe('Hello');
            
            btn.simulate('click');
            expect(onClick).toHaveBeenCalled();
            expect(btn.props().onClick()).toBe('clicked');
        });

        it('circ', () => {
            const btn  = shallow(
                <Button style={{ padding: 20 }} className='active' color='danger'>
                    Hello
                </Button>
            );

            expect(toJson(btn)).toMatchSnapshot();

            expect(btn.props().className).toBe('btn active danger');
            expect(btn.props().style).toEqual({ padding: 20 });
            expect(btn.text()).toBe('Hello');
        });
    });

    describe('Input', () => {
        it('init', () => {
        
            const onChange = jest.fn((val) => 'changed');

            const input = shallow(
                <Input onChange={onChange} value={'hello'} />
            );

            input.simulate('change', { target: { value: 'changed' }});

            expect(input.props().type).toBe('text');
            expect(input.props().value).toBe('hello');
            expect(onChange).toHaveBeenCalled();
        });
    })

    describe('TODO', () => {
        it('init', () => {
            jest.spyOn(Date.prototype, 'toLocaleString')
                .mockReturnValue('3/25/2020, 23:23:01');

            const todo = shallow(
                <Todo 
                    id={1}
                    name='name'
                    description='description'
                    date='2020-03-25T23:22:01.934Z'
                />
            );

            expect(toJson(todo)).toMatchSnapshot();
            expect(todo.props().className).toBe('todo');
            
        });
    });


    describe('APP', () => {
        beforeEach(() => {
            jest.clearAllMocks();
            mockSelectors({});
        });

        afterAll(() => jest.restoreAllMocks())

        it('init', () => {
            const app = shallow(
                <App />
            );
            

            expect(toJson(app)).toMatchSnapshot();
        });
    });


});