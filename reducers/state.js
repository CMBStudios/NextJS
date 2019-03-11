const init = {
    data: null,
    is_fetching: false,
    error: null,
}

export function usState(state=init, action) {
    if (typeof state === 'undefined') {
        return {
            data: undefined,
            is_fetching: false,
            error: undefined
        }
    }

    switch (action.type) {
        case 'REQUEST_STATES':
            return {
                ...state,
                data: undefined,
                is_fetching: true,
            };
        case 'RECEIVE_STATES':
            return {
                ...state,
                data: action.usState,
                is_fetching: false,
            };

            case 'ERROR_STATES':
                return {
                    ...state,
                    is_fetching: false,
                    error: action.error
            };
        default:
            return state
    }
}
