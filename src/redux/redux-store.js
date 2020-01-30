import { combineReducers, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { suggestReducer } from '../redux/reducer/suggest-reducer'
import {formsReducer} from '../redux/reducer/forms-reducer'

let reducers = combineReducers({
  suggestReducer: suggestReducer,
  formsReducer:formsReducer
})


let store = createStore(reducers,applyMiddleware(logger))


export default store

