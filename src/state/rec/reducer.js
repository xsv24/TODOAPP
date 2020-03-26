import types from './types';

export const inital = {
    pos: 0,
    steps: [ ],
    recording: true,
    playing: false,
};

export default function reducer(state = inital, { type, payload }) {
    switch(type) {

        case types.REC:
            return {
                ...state,
                recording: true
            };

        case types.PLAY:
            return {
                ...state,
                pos: 0,
                playing: true
            };
        
        case types.NEXT: 
            const pos = state.pos + 1;
            
            return {
                ...state,
                pos: pos < state.steps.length ? pos : 0,
                playing: pos < state.steps.length
            };

        case types.STOP:
            return {
                ...state,
                pos: state.steps.length,
                recording: false
            };

        case types.STEP:
            if(!state.recording) 
                return state;

            return {
                ...state,
                steps: [ ...state.steps, payload ]
            };

        case types.CLEAR:
            return { ...inital };
    
        default:
            return state;
    }
}