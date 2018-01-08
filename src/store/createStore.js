import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunks from 'redux-thunk'

import userReducer from '../reducers/userReducer'
import profileReducer from '../reducers/profileReducer'
import todoReducer from '../reducers/todoReducer'
import weatherReducer from '../reducers/weatherReducer'



const rootReducer = combineReducers({user: userReducer, profile: profileReducer, todos: todoReducer, weather: weatherReducer})

export default () => {
    const store = createStore(rootReducer, applyMiddleware(logger, thunks))
    return store
}