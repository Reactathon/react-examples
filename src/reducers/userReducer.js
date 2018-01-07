import { SET_USER, SET_LOGIN_ERROR } from '../actions/userActionTypes'

const mockUser = {
    isAuthenticated: false
}

const userReducer = (state = {user: mockUser}, action) => {

    switch (action.type) {
        case SET_USER:
            return Object.assign({}, state, {user: action.user})
        case SET_LOGIN_ERROR:
            return Object.assign({}, state, {error: action.error})
        default:
            return state
    }
}

// Selectors -- make an easy way to component's to access part of the state without needing to know the state stucture
export const isAuthenticated = state => state.user.user.isAuthenticated

export const loginError = state => state.user.error

export default userReducer