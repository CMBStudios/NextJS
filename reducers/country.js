const init = {
    data: null,
    is_fetching: false,
    error: null,
}

export function country(state=init, action) {
    if (typeof state === 'undefined') {
        return {
            data: undefined,
            is_fetching: false,
            error: undefined
        }
    }

    switch (action.type) {
        case 'REQUEST_COUNTRY':
            return {
                ...state,
                data: undefined,
                is_fetching: true,
            };
        case 'RECEIVE_COUNTRY':
            return {
                ...state,
                data: action.country,
                is_fetching: false,
            };

            case 'ERROR_COUNTRY':
                return {
                    ...state,
                    is_fetching: false,
                    error: action.error
            };
        default:
            return state
    }
}
