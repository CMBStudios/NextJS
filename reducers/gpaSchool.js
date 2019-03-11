const init = {
    data: null,
    is_fetching: false,
    error: null,
    single: null
}

export function gpaSchool(state=init, action) {
    if (typeof state === 'undefined') {
        return {
            data: undefined,
            is_fetching: false,
            error: undefined
        }
    }

    switch (action.type) {
        case 'REQUEST_GPASCHOOL':
            return {
                ...state,
                data: undefined,
                is_fetching: true,
            };
        case 'RECEIVE_GPASCHOOL':
            return {
                ...state,
                data: action.gpaSchool,
                is_fetching: false,
            };

            case 'ERROR_GPASCHOOL':
                return {
                    ...state,
                    is_fetching: false,
                    error: action.error
            };
        
            case 'REQUEST_SINGLE_GPASCHOOL':
            return {
                ...state,
                single: undefined,
                is_fetching: true,
            };
        case 'RECEIVE_SINGLE_GPASCHOOL':
            return {
                ...state,
                single: action.singleSchool,
                is_fetching: false,
            };

            case 'ERROR_SINGLE_GPASCHOOL':
                return {
                    ...state,
                    is_fetching: false,
                    error: action.error
            };
            case 'CLEAR_GPA':
                return {
                    ...state,
                    data: undefined,
                    single: undefined
                }

        default:
            return state
    }
}
