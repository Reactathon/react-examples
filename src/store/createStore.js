import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunks from 'redux-thunk'

import userReducer from '../reducers/userReducer'
import profileReducer from '../reducers/profileReducer'



const rootReducer = combineReducers({user: userReducer, profile: profileReducer})

export default () => {
    const store = createStore(rootReducer, applyMiddleware(logger, thunks))
    return store
}