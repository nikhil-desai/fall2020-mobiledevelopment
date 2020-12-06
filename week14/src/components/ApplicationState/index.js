let state = {
    pushup: 0,
    pullup: 0
  };
  
  function reducer(state, action) {
    switch (action.type) {
        case 'add-push':
            return {pushup: state.pushup + 1, pullup: state.pullup};
        case 'add-pull':
            return {pullup: state.pullup + 1, pushup: state.pushup};
        case 'sub-push':
            return {pushup: state.pushup - 1, pullup: state.pullup};
        case 'sub-pull':
            return {pullup: state.pullup - 1, pushup: state.pushup};
      default:
        throw new Error();
    }
  }
  
  export {state, reducer};