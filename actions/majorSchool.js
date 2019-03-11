export function errorSchoolByMajor(error) {
    return {
        type: 'ERROR_SCHOOL_MAJOR',
        error
    }
}

export function requestSchoolByMajor() {
    return {
        type: 'REQUEST_SCHOOL_MAJOR'
    }
}

export function receiveSchoolByMajor(schoolByMajor) {
    return {
        type: 'RECEIVE_SCHOOL_MAJOR',
        schoolByMajor
    }
}

export function errorSingleMajor(error) {
    return {
        type: 'ERROR_SINGLE_MAJORSCHOOL',
        error
    }
}

export function requestSingleMajor() {
    return {
        type: 'REQUEST_SINGLE_MAJORSCHOOL'
    }
}

export function clearMajor(){
    return {
        type: 'CLEAR_MAJOR'
    }
}

export function receiveSingleMajor(singleSchool) {
    return {
        type: 'RECEIVE_SINGLE_MAJORSCHOOL',
        singleSchool
    }
}