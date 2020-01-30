const initialState = {
    objForm:  [] 
}
   
  export const formsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ON_SUBMIT":
        return {...state, objForm: action.payload}
    default:
      return state
    } 
}

export const onSubmit = (objectForm) => ({
    type: "ON_SUBMIT",
    payload: objectForm
})
