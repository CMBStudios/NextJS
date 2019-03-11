const init = {
    data: null,
    token: null,
    redirect: false,
    is_fetching: false,
    error: null,
    registered: false
}

export function user(state=init, action) {
    if (typeof state === 'undefined') {
        return {
            data: undefined,
            token: undefined,
            is_fetching: false,
            error: undefined
        }
    }

    switch (action.type) {
        case 'REQUEST_LOGIN':
            return {
                ...state,
                is_fetching: true
            };
        case 'RECEIVE_LOGIN':
            return {
                ...state,
                data: action.data.user,
                token: action.data.token,
                redirect: true,
                is_fetching: false,
            };
        case 'ERROR_LOGIN':
            return {
                ...state,
                is_fetching: false,
                error: action.error
            };

        case 'REQUEST_USER':
            return {
                ...state,
                data: undefined,
                is_fetching: true,
            };
        case 'RECEIVE_USER':
            return {
                ...state,
                data: action.user,
                is_fetching: false,
            };
        case 'REGISTER_USER':
            return {
                ...state,
                is_fetching: false,
                registered: true
            };

        case 'ERROR_REGISTER':
            return {
                ...state,
                is_fetching: false,
                error: action.error
            };
            case 'FORGOT_USER':
            return {
                ...state,
                is_fetching: false,
                sent: true
            };
            case 'CLEAR_ERROR':
                return {
                    ...state,
                    error: undefined
                }
            case 'ERROR_FORGOT':
                return {
                    ...state,
                    is_fetching: false,
                    error: action.error
            };
        default:
            return state
    }
}
