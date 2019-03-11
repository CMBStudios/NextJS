export function errorReferral(error) {
    return {
        type: 'ERROR_REFERRAL',
        error
    }
}

export function requestReferral() {
    return {
        type: 'REQUEST_REFERRAL'
    }
}

export function receiveReferral(referral) {
    return {
        type: 'RECEIVE_REFERRAL',
        referral
    }
}