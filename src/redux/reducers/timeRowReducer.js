const initialState = {};
export const timeRowReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CELL':
      return { ...state, [action.roomID]: [action.payload] }
    default:
      return state;
  }
}
