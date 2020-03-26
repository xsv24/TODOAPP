import { createStore, combineReducers, applyMiddleware } from 'redux';

import recordMiddleware from './middleware/record-middleware';
import localstore from './localstore';

import rec from './rec/reducer';
import todos from './todo/reducer';
import types from './todo/types';

const localState = localstore.get('state');

const reducer = combineReducers({
    rec,
    todos
});

const store = createStore(reducer, localState, applyMiddleware(recordMiddleware(types)));
/*
store.subscribe(throttle(() => localstore.put({
    rec: store.getState().rec,
    todos: store.getState().todos
}), 1000));
*/
export default store;