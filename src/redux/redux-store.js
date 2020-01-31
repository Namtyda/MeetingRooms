import { combineReducers, createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import { formsReducer } from './reducers/formsReducer'
import { timeRowReducer } from './reducers/timeRowReducer'




let reducers = combineReducers({
  formsReducer: formsReducer,
  timeRowReducer: timeRowReducer,
});


export const store = createStore(reducers, applyMiddleware(logger))




