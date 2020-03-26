import recTypes from '../rec/types';
import { step, next as nxt } from '../rec/actions';
import { clear } from '../todo/actions';
import localstore from '../localstore';

 const recording = listenTypes => store => next => action => {
    const { rec, todos } = store.getState();

    // push next action
    if(rec.playing) {
        next(rec.steps[rec.pos]);
      
        return next(action);
    }

    // only record on certain types of actions
    if(action.type in listenTypes && !rec.playing) {
        // record the action
        store.dispatch(step(action));
        
        const res = next(action);

        // get the latest state and store state localy
        localstore.put(store.getState());

        return res;
    }
    
    if(recTypes.PLAY === action.type) {
        // reset the todos to last recording position
        store.dispatch(clear(
            Math.min(
                Math.abs(rec.steps.length - todos.length), 
                0
            ))
        );
       
        // set time outs and dispatch next actions
        for(let i = 0; i < rec.steps.length; i++) {
            setTimeout(() => store.dispatch(nxt()), i * 1000);
        }
    }

    return next(action);
}


export default recording;