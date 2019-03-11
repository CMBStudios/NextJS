const init = {
    data: null,
    is_fetching: false,
    single: null,
    error_single_forum: null,
    result: null,
    error: null,
}

export function forum(state=init, action) {
    if (typeof state === 'undefined') {
        return {
            data: undefined,
            is_fetching: false,
            error: undefined
        }
    }

    switch (action.type) {
        case 'REQUEST_FORUM':
            return {
                ...state,
                data: undefined,
                is_fetching: true,
            };
        case 'RECEIVE_FORUM':
            return {
                ...state,
                data: action.forum,
                is_fetching: false,
            };
        case 'SEARCH_FORUM':
            return {
                ...state,
                result: undefined,
                is_fetching: true,
            };
        case 'RECEIVE_FORUM_RESULT':
            return {
                ...state,
                result: action.result,
                is_fetching: false,
            };
        case 'ERROR_FORUM_SEARCH':
            return {
                ...state,
                is_fetching: false,
                error: action.error
        };
        case 'REQUEST_SINGLE_FORUM':
            return {
                ...state,
                is_fetching: true,
                single: undefined
            };
        case 'RECEIVE_SINGLE_FORUM':
            return {
                ...state,
                single: action.singleForum,
                is_fetching: false,
            };
        case 'ERROR_FORUM':
                return {
                    ...state,
                    is_fetching: false,
                    error: action.error
            };
        case 'ERROR_SINGLE_FORUM':
            return {
                ...state,
                error_single_forum: action.errorSingle
        };
        default:
            return state
    }
}
