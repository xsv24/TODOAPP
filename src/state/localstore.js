export const put = (state, key='state') => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(key, serializedState);
    } catch (e) {
      console.warn(e);
      // ignore write errors some users may have this disabled
    }
  };

  export const get = (key = 'state') => {
    try {
      const serializedState = localStorage.getItem(key);
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  }; 

  export default {
    get,
    put
  }