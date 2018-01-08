import axios from 'axios'

export const login = async (username, password) => {
    const result = await axios({
        url: 'http://localhost:8080/account/login',
        method: 'get',
        auth: {
            username,
            password
        },
    });

    return result.data
}

export const registerUser = async ({email, password}) => {
    const result = await axios({
        url: 'http://localhost:8080/account/create',
        method: 'post',
        data: {
            username: email,
            password
        }
    });

    return result.data
}