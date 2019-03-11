import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from './reducers/index';

const initialState = {}
const devtools = (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__)
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f

export function initializeStore (initialState = initialState) {
  return createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk),
    (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__)
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f
  ))
}