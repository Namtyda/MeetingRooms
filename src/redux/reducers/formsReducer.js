const initialState = {
  title: '',
  date: '',
  start: '00:00',
  end: '00:00',
};


export function formsReducer(state = initialState, action) {
  switch (action.type) {
    case 'ON_SUBMIT':
      return { ...state, ...action.payload }
    case 'ADD_ROOM_ID':
      return { ...state, roomId: action.payload }
    case 'ADD_PEOPLE_ID':
      return { ...state, personsIds: [...action.payload] }
    default:
      return state;
  }
}
