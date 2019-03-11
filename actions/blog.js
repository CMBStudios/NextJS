export function errorBlog(error) {
    return {
        type: 'ERROR_BLOG',
        error
    }
}
export function errorSingleBlog(errorSingle) {
    return {
        type: 'ERROR_SINGLE_BLOG',
        errorSingle
    }
}

export function requestBlog() {
    return {
        type: 'REQUEST_BLOG'
    }
}

export function receiveBlog(blog) {
    return {
        type: 'RECEIVE_BLOG',
        blog
    }
}

export function requestSingleBlog() {
    return {
        type: 'REQUEST_SINGLE_BLOG'
    }
}

export function receiveSingleBlog(singleBlog) {
    return {
        type: 'RECEIVE_SINGLE_BLOG',
        singleBlog
    }
}