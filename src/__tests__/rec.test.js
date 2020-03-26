import reducer, { inital } from '../state/rec/reducer';
import {
   rec,
   stop,
   next,
   step,
   clear,
   play
} from '../state/rec/actions';

import {
    add, 
    edit,
    sub
} from '../state/todo/actions';

import types from '../state/rec/types';

describe('Record reducer', () => {
    it('Init', () => {
        const state = reducer(inital, { });
        expect(state).toEqual(inital);
    });

    describe('Actions', () => {
        it('REC', () => {
            const payload = { };

            expect(rec(payload)).toEqual({
                type: types.REC,
                payload
            });

            expect(rec()).toEqual({
                type: types.REC
            });
        });

        it('STOP', () => {
            const payload = { };

            expect(stop(payload)).toEqual({
                type: types.STOP,
                payload
            });

            expect(stop()).toEqual({
                type: types.STOP
            });
        });

        it('PLAY', () => {
            const payload = { };

            expect(play(payload)).toEqual({
                type: types.PLAY,
                payload
            });

            expect(play()).toEqual({
                type: types.PLAY
            });
        });

        it('NEXT', () => {
            const payload = { };

            expect(next(payload)).toEqual({
                type: types.NEXT,
                payload
            });

            expect(next()).toEqual({
                type: types.NEXT
            });
        });

        it('STEP', () => {
            const payload = { };

            expect(step(payload)).toEqual({
                type: types.STEP,
                payload
            });

            expect(step()).toEqual({
                type: types.STEP
            });
        });

        it('CLEAR', () => {
            expect(clear()).toEqual({
                type: types.CLEAR
            });

            const payload = { };

            expect(clear(payload)).toEqual({
                type: types.CLEAR
            });
        });
    });

    describe('Dispatching', () => {
        let state;
        
        beforeEach(() => {
            state = {
                pos: 0,
                steps: [ 
                    add({ name: 'test 1', description: 'test1' }),
                    edit({ id: 0, name: 'test 1', description: 'test1' }),
                    add({ name: 'test 2', description: 'test2' }),
                    sub({ id: 1, name: 'test 1', description: 'test1' })
                ],
                recording: true,
                playing: false,
            };
        });

        it('REC', () => {
            const actual = reducer(state, rec());
            
            expect(actual).toEqual({ ...state, recording: true });
        });

        it('PLAY', () => {
            const actual = reducer(state, play());
            
            expect(actual).toEqual({ ...state, playing: true, pos: 0 });
        });

        it('NEXT', () => {
            const actual = reducer(state, next());
            expect(actual).toEqual({ ...state, playing: true, pos: 1 });
            expect(reducer(actual, next())).toEqual({ ...state, playing: true, pos: 2 });
            
        });

        it('STOP', () => {
            const actual = reducer(state, stop());
            
            expect(actual).toEqual({ ...state, recording: false, pos: 4 });
        });

        it('STEP', () => {
            const payload = add({ name: 'test 1', description: 'test1' });
            const actual = reducer(state, step(payload));
            expect(actual).toEqual({ ...state, steps: state.steps.concat(payload) });
        });

        it('CLEAR', () => {
            const actual = reducer(state, clear());

            expect(actual).toEqual(inital);
        });
    });
});