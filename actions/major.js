export function errorMajor(error) {
    return {
        type: 'ERROR_MAJOR',
        error
    }
}

export function requestMajor() {
    return {
        type: 'REQUEST_MAJOR'
    }
}

export function receiveMajor(major) {
    return {
        type: 'RECEIVE_MAJOR',
        major
    }
}