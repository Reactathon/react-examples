import { SET_USER } from '../actions/userActionTypes'

const mockUser = {
    isAuthenticated: false
}

const userReducer = (state = mockUser, action) => {

    switch (action.type) {
        case SET_USER:
            return action.user
        default:
            return state
    }
}

export default userReducer