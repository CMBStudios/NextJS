export function requestLogin() {
    return {
        type: 'REQUEST_LOGIN'
    }
}

export function receiveLogin(data) {
    return {
        type: 'RECEIVE_LOGIN',
        data
    }
}

export function errorLogin(error) {
    return {
        type: 'ERROR_LOGIN',
        error
    }
}

export function errorRegister(error) {
    return {
        type: 'ERROR_REGISTER',
        error
    }
}

export function clearError(){
    return {
        type: 'CLEAR_ERROR'
    }
}

export function requestUser() {
    return {
        type: 'REQUEST_USER'
    }
}

export function registerUser() {
    return {
        type: 'REGISTER_USER'
    }
}

export function forgotUser() {
    return {
        type: 'FORGOT_USER'
    }
}

export function errorForgot(error) {
    return {
        type: 'ERROR_FORGOT',
        error
    }
}

export function receiveUser(user) {
    return {
        type: 'RECEIVE_USER',
        user
    }
}