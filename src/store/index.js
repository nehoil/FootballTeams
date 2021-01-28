import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { teamsReducer } from './reducers/teamsReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(teamsReducer, composeEnhancers(applyMiddleware(thunk)))