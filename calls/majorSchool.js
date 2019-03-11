import {requestSchoolByMajor, receiveSchoolByMajor, errorSchoolByMajor, requestSingleMajor, receiveSingleMajor, errorSingleMajor, clearMajor} from '../actions/majorSchool';
import { AsyncStorage, Alert } from "react-native"

export function clearMajorCall(){
    return (dispatch)=> {
        dispatch(clearMajor());
    }
}

export function majorSearchCall(url, token, majorRaw, level, country, state, offset, more){
    if(url && majorRaw && level && state){
    return (dispatch) => {
        dispatch(requestSchoolByMajor())
        let major = majorRaw.trim()
        fetch(`${url}`, {
                         method: 'POST',
                         headers: {'Content-Type': 'application/json', 'Authorization': `${token}`},
                         mode: 'cors',
                         body: JSON.stringify({major, level, country, state, offset})
                     })
            .then(response=>response.json())
            .then(json=>{
                if (json.error)
                    throw new Error(json.error.message);
                    let modify = {
                        "count": json.count,
                        "rows": more.concat(json.rows)
                    }
                dispatch(receiveSchoolByMajor(modify))
                    
            })
            .catch(error=>dispatch(errorSchoolByMajor(error.message)));
        }
    }
}

export function singleMajorCall(url, token, schoolID){
    return (dispatch) => {
        dispatch(requestSingleMajor())
        fetch(`${url}`.replace('{school_id}', schoolID), {
                         method: 'GET',
                         headers: {'Content-Type': 'application/json', 'Authorization': `${token}`},
                         mode: 'cors'
                     })
            .then(response=>response.json())
            .then(json=>{
                if (json.error)
                    throw new Error(json.error.message);
                    dispatch(receiveSingleMajor(json))
                    
                //alert(json.token);
            })
            .catch(error=>dispatch(errorSingleMajor(error.message)));
        }
}
