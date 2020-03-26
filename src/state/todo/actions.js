import types from './types';

export const add = payload => ({
    type: types.ADD,
    payload
});

export const sub = payload => ({
    type: types.SUB,
    payload
});

export const edit = payload => ({
    type: types.EDIT,
    payload
});

export const clear = payload => ({
    type: types.CLEAR,
    payload
});