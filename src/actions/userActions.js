import { SET_USER, SET_LOGIN_ERROR } from './userActionTypes'
import { login } from '../services/userService'

const setUser = user => {
    return {
        type: SET_USER,
        user
    }
}

const setLoginError = error => {
    return {
        type: SET_LOGIN_ERROR,
        error
    }
}


export const loginUser = (userName, password) => async dispatch => {
    try {
        const user = await login(userName, password)
        user.isAuthenticated = true
        return dispatch(setUser(user))
    } catch (e) {
        return dispatch(setLoginError(e.response.status))
        // Error handle incorrect user password, locked out users etc...
    }
}

export const logout = () => {
    // In a real application this would hit the logout of the server but since this just for demo just update the store
    return setUser({isAuthenticated: false})
}
