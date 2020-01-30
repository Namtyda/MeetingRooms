// const { createStore } = require('redux');

class Redux {
  constructor(reducer, initialState) {
    this.state = initialState;
    this.reducer = reducer;
    this.subscribers = [];
  }
  
  getState() {
    return this.state;
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.subscribers.forEach(fn => fn())
  }
  subscribe(fn) {
    this.subscribers.push(fn);
  }
}

const createStore = (reducer, initialState) => new Redux(reducer, initialState);

// {
//   user: {},
//   basket: {},
//   page: {}
// }

const initialState = [2, 3, 4];

function reducer(state, action) {
  if (action.type === 'ADD_NUMBER') {
    return [...state, action.payload];
  }
  if (action.type === 'POP') {
    return state.slice(0, -1);
  }
  if (action.type === 'POP_FRONT') {
    return state.slice(1);
  }
  return state;
}

const store = createStore(reducer, initialState);

store.subscribe(() => {
})

store.dispatch({
  type: 'ADD_NUMBER',
  payload: 1111
});
store.dispatch({
  type: 'POP_FRONT'
})

