export function errorCountry(error) {
    return {
        type: 'ERROR_COUNTRY',
        error
    }
}

export function requestCountry() {
    return {
        type: 'REQUEST_COUNTRY'
    }
}

export function receiveCountry(country) {
    return {
        type: 'RECEIVE_COUNTRY',
        country
    }
}