import reducer from '../state/todo/reducer';
import {
    add,
    sub,
    edit,
    clear
} from '../state/todo/actions';

import types from '../state/todo/types';

describe('TODO Reducer', () => {
    it('Init', () => {
        const state = reducer([], {});
        expect(state.length).toBe(0);
    });

    describe('Actions', () => {
        it('ADD', () => {
            const payload = { name: 'test', description: 'test' };

            expect(add(payload)).toEqual({
                type: types.ADD,
                payload
            });
        });

        it('SUB', () => {
            const payload = { id: 0, name: 'test', description: 'test' };

            expect(sub(payload)).toEqual({
                type: types.SUB,
                payload
            });
        });

        it('EDIT', () => {
            const payload = { name: 'test', description: 'test' };

            expect(edit(payload)).toEqual({
                type: types.EDIT,
                payload
            });
        });

        it('CLEAR', () => {
            expect(clear(1)).toEqual({
                type: types.CLEAR,
                payload: 1
            });
        });
    });

    describe('Dispatching', () => {
        let entry;
        let state;

        beforeEach(() => {
            entry = {
                name: 'todo',
                description: 'hello',
                date: new Date()
            };

            state = [
                { id: 0, ...entry, name: 'first' },
                { id: 1, ...entry, name: 'sec'},
                { id: 2, ...entry, name: 'third' }
              ];
        });


        it('ADD', () => {
            const actual = reducer(state, add(entry));

            expect(actual.length).toBe(4);
            expect(actual[actual.length - 1]).toEqual({ id: 3, ...entry });
        });

        it('SUB', () => {
            const actual = reducer(state, sub(0));

            expect(actual.length).toBe(2);
        });

        it('EDIT', () => {
            const payload = {
                id: 0,
                name: 'edited',
                description: 'edited'
            };

            const actual = reducer(state, edit(payload));

            entry.id = 0;
            entry.name = 'edited';
            entry.description = 'edited';
         
            expect(actual.length).toBe(3);
            expect(actual[0]).toEqual(entry);
        });

        describe('CLEAR', () => {
            it('no params', () => {
                const actual = reducer(state, clear());

                expect(actual.length).toBe(0);
                expect(actual).toEqual([]);
            });

            it('with params', () => {
                const actual = reducer(state, clear(state.length));

                expect(actual.length).toBe(3);
                expect(actual).toEqual(state);

                const actual2 = reducer(state, clear(2));
                
                expect(actual2.length).toBe(2);
                expect(actual2).toEqual([
                    {
                        id: 0,
                        name: 'first',
                        description: 'hello',
                        date: entry.date
                      },
                      {
                        id: 1,
                        name: 'sec',
                        description: 'hello',
                        date: entry.date
                      }
                ]);
            });
        });
    });
});