import React, { useState } from 'react';
import { useSelector } from 'react-redux'

import Todo from './components/Todo';

import {
    Button, 
    ButtonGroup,
    Container,
    Card,
    Input,
    Row,
    Col
} from './components';


import * as todoActions from './state/todo/actions';
import * as recActions from './state/rec/actions';
import useActions from './hooks/useActions';

const mapStateToProps = ({ todos, rec }) => ({
    todos: todos,
    playing: rec.playing, 
    recording: rec.recording, 
    steps: rec.steps
});

export const App = () => {
    const { 
        todos,
        playing,
        recording,
        steps
    } = useSelector(mapStateToProps);

    const { add } = useActions(todoActions);
    const { rec, play, stop, clear } = useActions(recActions);
    
    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');
    
    function onAdd() {    
        add({ 
            name,
            description,
            date: new Date()
        });

        setName('');
        setDescription('');
    }

    return (
        <Container>
            <Container>
                <Card style={{ display: 'flex' }}>
                    <Col style={{ flex: 1 }}>
                        <Input style={{ flex: 1 }} 
                            type="text" 
                            placeholder="Enter To do" 
                            value={name} 
                            onChange={setName}
                        />

                        <Input style={{ flex: 1, marginTop: 25 }} 
                            type='text'
                            placeholder='Enter description'
                            value={description}
                            onChange={setDescription}
                        />
                    </Col>
                </Card>

                <Container>                
                    <Row>
                        <Button onClick={onAdd} rounded disabled={!name || !description}>
                            Add
                        </Button>
                    
                        <ButtonGroup>
                            <Button color={'danger'} circ onClick={rec} disabled={recording} title="record">
                                ○
                            </Button>

                            <Button color="danger" onClick={stop} circ disabled={!recording} title="stop">
                                □
                            </Button>

                            <Button color="success" circ onClick={play} disabled={playing || !steps.length} title="play">
                                ▷
                            </Button>

                            <Button color="danger" onClick={clear} circ disabled={!steps.length} title="clear">
                                ✘
                            </Button>
                        </ButtonGroup>
                    </Row>
                </Container>

            </Container>


            <Container> 
                {todos.map(todo => (
                    <Todo key={todo.id} {...todo} />
                ))}
            </Container>
       
        </Container>
    );
};

export default App;
