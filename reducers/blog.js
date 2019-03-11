const init = {
    data: null,
    single: null,
    error_single_blog: null,
    is_fetching: false,
    error: null,
}

export function blog(state=init, action) {
    if (typeof state === 'undefined') {
        return {
            data: undefined,
            is_fetching: false,
            error: undefined
        }
    }

    switch (action.type) {
        case 'REQUEST_BLOG':
            return {
                ...state,
                data: undefined,
                is_fetching: true,
            };
        case 'RECEIVE_BLOG':
            return {
                ...state,
                data: action.blog,
                is_fetching: false,
            };

        case 'REQUEST_SINGLE_BLOG':
            return {
                ...state,
                is_fetching: true,
                single: undefined
            };
        case 'RECEIVE_SINGLE_BLOG':
            return {
                ...state,
                single: action.singleBlog,
                is_fetching: false,
            };

            case 'ERROR_BLOG':
                return {
                    ...state,
                    is_fetching: false,
                    error: action.error
            };
            case 'ERROR_SINGLE_BLOG':
                return {
                    ...state,
                    error_single_blog: action.errorSingle
            };
        default:
            return state
    }
}
