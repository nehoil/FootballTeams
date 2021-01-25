import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { userReducer } from './reducers/userReducer'
import { contactReducer } from './reducers/contactReducer'

const rootReducer = combineReducers({
  userReducer,
  contactReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))