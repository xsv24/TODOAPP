import React from 'react';
import Card from '../Card';
import Row from '../Row';
import Col from '../Col';
import Button, { ButtonGroup } from '../Button';
import Input from '../Input';

import styles from './todo.scss';

import * as todoActions from '../../state/todo/actions';
import useActions from '../../hooks/useActions';

export const Todo = ({
    id,
    name,
    description,
    date
}) => {
    const { sub, edit } = useActions(todoActions);

    return (
        <Card style={{ margin: '1rem 0'}} className={styles['todo']}>
            <Row>
                <Col style={{ flex: 1 }}>
                    <Input style={{ flex: 1 }} 
                            type="text" 
                            placeholder="Enter todo" value={name} 
                            onChange={val => edit({ id, name: val })} 
                    />

                    <Input style={{ flex: 1, marginTop: 25 }} 
                        type='text'
                        placeholder='Enter description'
                        value={description}
                        onChange={val => edit({ id, description: val })}
                    />
                </Col>
                <Col className={styles['actions']}>
                    <Col justify='flex-end'>
                        <small>
                            { date instanceof Date 
                                ? date.toLocaleString() 
                                : new Date(date).toLocaleString()
                            }
                        </small>
                    </Col>
                    <ButtonGroup>
                        <Button color="success" circ onClick={_ => sub(id)}>
                            ✔
                        </Button>
                        <Button color="danger" circ onClick={_ => sub(id)}> 
                            ✘ 
                        </Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </Card>
    );
}

export default Todo;