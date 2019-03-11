const init = {
    data: null,
    is_fetching: false,
    error: null,
}

export function major(state=init, action) {
    if (typeof state === 'undefined') {
        return {
            data: undefined,
            is_fetching: false,
            error: undefined
        }
    }

    switch (action.type) {
        case 'REQUEST_MAJOR':
            return {
                ...state,
                data: undefined,
                is_fetching: true,
            };
        case 'RECEIVE_MAJOR':
            return {
                ...state,
                data: action.major,
                is_fetching: false,
            };

            case 'ERROR_MAJOR':
                return {
                    ...state,
                    is_fetching: false,
                    error: action.error
            };
        default:
            return state
    }
}
