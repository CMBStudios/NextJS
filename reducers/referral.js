const init = {
    data: null,
    is_fetching: false,
    error: null,
}

export function referral(state=init, action) {
    if (typeof state === 'undefined') {
        return {
            data: undefined,
            is_fetching: false,
            error: undefined
        }
    }

    switch (action.type) {
        case 'REQUEST_REFERRAL':
            return {
                ...state,
                data: undefined,
                is_fetching: true,
            };
        case 'RECEIVE_REFERRAL':
            return {
                ...state,
                data: action.referral,
                is_fetching: false,
            };

            case 'ERROR_REFERRAL':
                return {
                    ...state,
                    is_fetching: false,
                    error: action.error
            };
        default:
            return state
    }
}
