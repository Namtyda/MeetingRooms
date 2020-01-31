export const onSubmit = objForm => ({
  type: 'ON_SUBMIT',
  payload: objForm
});

export const onAddRoomId = id => ({
  type: 'ADD_ROOM_ID',
  payload: id
});

export const onAddPeopleId = id => ({
  type: 'ADD_PEOPLE_ID',
  payload: id
});

export const addCell = (roomId, cell) => ({
  type: 'ADD_CELL',
  roomID: roomId,
  payload: cell
});