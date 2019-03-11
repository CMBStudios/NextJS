const init = {
    data: null,
    single: null,
    is_fetching: false,
    error: null,
}

export function majorSchool(state=init, action) {
    if (typeof state === 'undefined') {
        return {
            data: undefined,
            is_fetching: false,
            error: undefined
        }
    }

    switch (action.type) {
        case 'REQUEST_SCHOOL_MAJOR':
            return {
                ...state,
                data: undefined,
                is_fetching: true,
            };
        case 'RECEIVE_SCHOOL_MAJOR':
            return {
                ...state,
                data: action.schoolByMajor,
                is_fetching: false,
            };

            case 'ERROR_SCHOOL_MAJOR':
                return {
                    ...state,
                    is_fetching: false,
                    error: action.error
            };

            case 'REQUEST_SINGLE_MAJORSCHOOL':
            return {
                ...state,
                single: undefined,
                is_fetching: true,
            };
        case 'RECEIVE_SINGLE_MAJORSCHOOL':
            return {
                ...state,
                single: action.singleSchool,
                is_fetching: false,
            };

        case 'ERROR_SINGLE_MAJORSCHOOL':
                return {
                    ...state,
                    is_fetching: false,
                    error: action.error
            };

            case 'CLEAR_MAJOR':
            return {
                ...state,
                data: undefined,
                single: undefined
            }
        default:
            return state
    }
}
