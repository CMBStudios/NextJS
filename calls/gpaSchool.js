import {requestGpaSchool, receiveGpaSchool, errorGpaSchool, requestSingleGpa, receiveSingleGpa, errorSingleGpa, clearGpa} from '../actions/gpaSchool';
import { AsyncStorage } from "react-native"

export function clearGpaCall (){
    return (dispatch)=> {
        dispatch(clearGpa());
    }
}

export function gpaSearchCall(url, token, gpa, level, state, user_id, offset, more){
    if(url && gpa && level && state){
    return (dispatch) => {
        dispatch(requestGpaSchool())
        fetch(`${url}`, {
                         method: 'POST',
                         headers: {'Content-Type': 'application/json', 'Authorization': `${token}`},
                         mode: 'cors',
                         body: JSON.stringify({state, gpa, level, user_id, offset})
                     })
            .then(response=>response.json())
            .then(json=>{
                if (json.error)
                    throw new Error(json.error.message);
                    let modify = {
                        "count": json.count,
                        "rows": more.concat(json.rows)
                    }
                    dispatch(receiveGpaSchool(modify))
                    
                //alert(json.token);
            })
            .catch(error=>dispatch(errorGpaSchool(error.message)));
        }
    }
}

export function singleGpaCall(url, token, schoolID){
    return (dispatch) => {
        dispatch(requestSingleGpa())
        fetch(`${url}`.replace('{school_id}', schoolID), {
                         method: 'GET',
                         headers: {'Content-Type': 'application/json', 'Authorization': `${token}`},
                         mode: 'cors'
                     })
            .then(response=>response.json())
            .then(json=>{
                if (json.error)
                    throw new Error(json.error.message);
                    dispatch(receiveSingleGpa(json))
                    
                //alert(json.token);
            })
            .catch(error=>dispatch(errorSingleGpa(error.message)));
        }
}
