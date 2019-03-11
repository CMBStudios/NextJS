export function errorForum(error) {
    return {
        type: 'ERROR_FORUM',
        error
    }
}
export function errorForumSearch(error) {
    return {
        type: 'ERROR_FORUM_SEARCH',
        error
    }
}

export function requestForum() {
    return {
        type: 'REQUEST_FORUM'
    }
}

export function receiveForum(forum) {
    return {
        type: 'RECEIVE_FORUM',
        forum
    }
}

export function searchForum() {
    return {
        type: 'SEARCH_FORUM'
    }
}

export function receiveForumResult(result) {
    return {
        type: 'RECEIVE_FORUM_RESULT',
        result
    }
}

export function requestSingleForum() {
    return {
        type: 'REQUEST_SINGLE_FORUM'
    }
}

export function receiveSingleForum(singleForum) {
    return {
        type: 'RECEIVE_SINGLE_FORUM',
        singleForum
    }
}

export function errorSingleForum(errorSingle) {
    return {
        type: 'ERROR_SINGLE_FORUM',
        errorSingle
    }
}