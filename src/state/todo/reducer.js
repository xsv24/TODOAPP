import types from './types';

export default function reducer(state = [ ], { type, payload }) {
    switch(type) {
        case types.ADD:
            return [
                ...state,
                {
                    ...payload,
                    id: state.length
                }
            ];
        case types.SUB:
            state.splice(payload, 1);

            return state.map((todo, i) => ({
                ...todo,
                id: i
            }));
        
        case types.EDIT:
            const todo = state[payload.id];
            state.splice(payload.id, 1, { ...todo, ...payload });
        
            return [ ...state ];
        
        case types.CLEAR:
            return state.slice(0, payload || 0).map((todo, i) => ({
                ...todo,
                id: i
            }));;
            
        default:
            return state;
    }
}