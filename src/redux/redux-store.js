import { combineReducers, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { suggestReducer } from './suggest-reducer'



let reducers = combineReducers({
  suggestReducer: suggestReducer
})


let store = createStore(reducers,applyMiddleware(logger))


export default store

