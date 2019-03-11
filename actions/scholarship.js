export function errorScholarship(error) {
    return {
        type: 'ERROR_SCHOLARSHIP',
        error
    }
}

export function requestScholarship() {
    return {
        type: 'REQUEST_SCHOLARSHIP'
    }
}

export function receiveScholarship(scholarship) {
    return {
        type: 'RECEIVE_SCHOLARSHIP',
        scholarship
    }
}

export function errorSingleScholarship(error) {
    return {
        type: 'ERROR_SINGLE_SCHOLARSHIP',
        error
    }
}

export function requestSingleScholarship() {
    return {
        type: 'REQUEST_SINGLE_SCHOLARSHIP'
    }
}

export function receiveSingleScholarship(singleScholarship) {
    return {
        type: 'RECEIVE_SINGLE_SCHOLARSHIP',
        singleScholarship
    }
}

export function clearScholarship(){
    return {
        type: 'CLEAR_SCHOLARSHIP'
    }
}

export function clearScholarships(){
    return {
        type: 'CLEAR_SCHOLARSHIPS'
    }
}

export function errorNoCoin(error) {
    return {
        type: 'ERROR_NOCOIN',
        error
    }
}

export function requestNoCoin() {
    return {
        type: 'REQUEST_NOCOIN'
    }
}

export function receiveNoCoin(coin) {
    return {
        type: 'RECEIVE_NOCOIN',
        coin
    }
}