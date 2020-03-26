import types from './types';

export const rec = payload => ({
    type: types.REC,
    payload
});

export const stop = payload => ({
    type: types.STOP,
    payload
});

export const play = payload => ({
    type: types.PLAY,
    payload
});

export const clear = payload => ({
    type: types.CLEAR
});

export const step = payload => ({
    type: types.STEP,
    payload
});

export const next = payload => ({
    type: types.NEXT,
    payload
})