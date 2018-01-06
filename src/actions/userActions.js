import { SET_USER } from './userActionTypes'
import { login } from '../services/userService'

export const setUser = user => {
    return {
        type: SET_USER,
        user
    }
}


export const loginUser = (userName, password) => async dispatch => {
    try {
        const user = await login(userName, password)
        user.isAuthenticated = true
        return dispatch(setUser(user))
    } catch (e) {
        // Error handle incorrect user password, locked out users etc...
    }
}
