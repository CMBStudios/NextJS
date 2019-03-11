import {errorBlog, receiveBlog, requestBlog, receiveSingleBlog, requestSingleBlog, errorSingleBlog} from '../actions/blog';
import { AsyncStorage } from "react-native"

export function getBlogCall(url, offset, e){
    return (dispatch) => {
        dispatch(requestBlog())
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
                    dispatch(receiveBlog(modify))
                    //alert(json)
                //alert(json.token);
            })
            .catch(error=>dispatch(errorBlog(error.message)));
        }
}

export function getSingleBlogCall(url, id){
    return (dispatch) => {
        dispatch(requestSingleBlog())
        fetch(`${url}`.replace('{blog_id}', id), {
                         method: 'GET',  
                         headers: {'Content-Type': 'application/json'},
                         mode: 'cors'
                     })
            .then(response=>response.json())
            .then(json=>{
                if (json.error)
                    throw new Error(json.error.message);
                    dispatch(receiveSingleBlog(json))
                    //alert(json)
                //alert(json.token);
            })
            .catch(error=>dispatch(errorSingleBlog(error.message)));
        }
}
