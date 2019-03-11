export function errorStates(error) {
    return {
        type: 'ERROR_STATES',
        error
    }
}

export function requestStates() {
    return {
        type: 'REQUEST_STATES'
    }
}

export function receiveStates(usState) {
    return {
        type: 'RECEIVE_STATES',
        usState
    }
}