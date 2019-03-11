export function errorGpaSchool(error) {
    return {
        type: 'ERROR_GPASCHOOL',
        error
    }
}

export function requestGpaSchool() {
    return {
        type: 'REQUEST_GPASCHOOL'
    }
}

export function receiveGpaSchool(gpaSchool) {
    return {
        type: 'RECEIVE_GPASCHOOL',
        gpaSchool
    }
}

export function errorSingleGpa(error) {
    return {
        type: 'ERROR_SINGLE_GPASCHOOL',
        error
    }
}

export function requestSingleGpa() {
    return {
        type: 'REQUEST_SINGLE_GPASCHOOL'
    }
}

export function receiveSingleGpa(singleSchool) {
    return {
        type: 'RECEIVE_SINGLE_GPASCHOOL',
        singleSchool
    }
}

export function clearGpa(){
    return {
        type: 'CLEAR_GPA'
    }
}