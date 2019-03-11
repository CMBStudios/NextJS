import {errorForum, receiveForum, requestForum, errorForumSearch, searchForum, receiveForumResult, errorSingleForum, receiveSingleForum, requestSingleForum,} from '../actions/forum';
import { AsyncStorage } from "react-native"

export function getForumCall(url, offset, e){
    return (dispatch) => {
        dispatch(requestForum())
        fetch(`${url}`.replace('{off}', offset), {
                         method: 'GET',  
                         headers: {'Content-Type': 'application/json'},
                         mode: 'cors'
                     })
            .then(response=>response.json())
            .then(json=>{
                if (json.error)
                    throw new Error(json.error.message);
                    let modify = {
                        "count": json.count,
                        "rows": e.concat(json.rows)
                    }
                    dispatch(receiveForum(modify))
                    //alert(json)
                //alert(json.token);
            })
            .catch(error=>dispatch(errorForum(error.message)));
        }
}

export function searchForumCall(url, q){
    return (dispatch) => {
        dispatch(searchForum())
        fetch(`${url}`, {
                         method: 'POST',  
                         headers: {'Content-Type': 'application/json'},
                         mode: 'cors',
                         body: JSON.stringify({q})
                     })
            .then(response=>response.json())
            .then(json=>{
                if (json.error)
                    throw new Error(json.error.message);
                    dispatch(receiveForumResult(json))
                    //alert(json)
                //alert(json.token);
            })
            .catch(error=>dispatch(errorForumSearch(error.message)));
        }
}

export function postCommentCall(url, content, by, forumId, firstName, lastName, token, reload, e){
    return (dispatch) => {
        fetch(`${url}`, {
                         method: 'POST',  
                         headers: {'Content-Type': 'application/json', 'Authorization': `${token}`},
                         mode: 'cors',
                         body: JSON.stringify({content, by, forumId, firstName, lastName})
                     })
            .then(response=>response.json())
            .then(json=>{
                if (json.error)
                    throw new Error(json.error.message);
                dispatch(getSingleForumCall(reload, forumId, e))
                    //alert(json)
                //alert(json.token);
            })
            .catch(error=>dispatch(errorForumSearch(error.message)));
        }
}

export function getSingleForumCall(url, id, e){
    return (dispatch) => {
        dispatch(requestSingleForum())
        fetch(`${url}`.replace('{forum_id}', id), {
                         method: 'GET',  
                         headers: {'Content-Type': 'application/json'},
                         mode: 'cors'
                     })
            .then(response=>response.json())
            .then(json=>{
                if (json.error)
                    throw new Error(json.error.message);
                    let modify = {
                        ...json,
                        "replies": e.concat(json.replies)
                    }
                    dispatch(receiveSingleForum(modify))
                    //alert(json)
                //alert(json.token);
            })
            .catch(error=>dispatch(errorSingleForum(error.message)));
        }
}

