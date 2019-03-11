import {requestLogin, clearError, receiveLogin, errorLogin, receiveUser, requestUser, errorRegister, registerUser, errorForgot, forgotUser} from '../actions/user';
import fetch from 'isomorphic-unfetch';

export function clearErrorCall(){
    return (dispatch)=> {
        dispatch(clearError());
    }
}

export function getStartedCall(url, token, user_id, major, applicantCountry, scholarshipCountry, gpa, criteria, level, firstLOgin, nav){
    return (dispatch) => {
    let firstLogin = false;
    fetch(url.replace('{user_id}', user_id ), {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Authorization': `${token}`},
        mode: 'cors',
        body: JSON.stringify({major, applicantCountry, scholarshipCountry, gpa, criteria, level, firstLogin})
    })
    .then(
        response => response.json()
    )
    .then(json=>{
        if (json.error)
            throw Error(json.error.message || 'Unknown fetch error');
        //refresh user data
        dispatch(refreshUserCall(user_id, token))
        nav.navigate("SignedIn")
    })
    .catch(error=>alert(error.message));
}
}
export function getUserCall(userID, token){
    return (dispatch) => {
        dispatch(requestUser())
        fetch(`https://www.theacademist.com/api/v1/user/${userID}`, {
                         method: 'GET',  
                         headers: {'Content-Type': 'application/json', 'Authorization': `${token}`},
                         mode: 'cors'
                     })
            .then(response=>response.json())
            .then(json=>{
                if (json.error)
                    throw new Error(json.error.message);
                    dispatch(receiveUser(json))
                    //alert(json)
                //alert(json.token);
            })
            .catch(error=>dispatch(errorLogin(error.message)));
        }
}

export function refreshUserCall(userID, token){
    return (dispatch) => {
        fetch(`https://www.theacademist.com/api/v1/user/${userID}`, {
                         method: 'GET',  
                         headers: {'Content-Type': 'application/json', 'Authorization': `${token}`},
                         mode: 'cors'
                     })
            .then(response=>response.json())
            .then(json=>{
                if (json.error)
                    throw new Error(json.error.message);
                    dispatch(receiveUser(json))
            })
            .catch(error=>console.log(error));
        }
}

export function updateUserCall(url, userID, token, to, change){
    return (dispatch) => {
        const obj = {};
        obj[`${to}`] = `${change}`;
        fetch(`${url.replace('{user_id}', userID)}`, {
                         method: 'PATCH',  
                         headers: {'Content-Type': 'application/json', 'Authorization': `${token}`},
                         mode: 'cors',
                         body: JSON.stringify(obj)
                     })
            .then(response=>response.json())
            .then(json=>{
               console.log(json)
                if (json.error)
                    throw new Error(json.error.message);
                    dispatch(refreshUserCall(userID, token))
                    dispatch(receiveUser(json))
                    //alert(json)
                //alert(json.token);
            })
            .catch(error=>dispatch(errorLogin(error.message)));
        }
}
export function loginUserCall(url, email, password, e){
    if(url && email && password){
    return (dispatch) => {
        dispatch(requestLogin())
        fetch(`${url}`, {
                         method: 'POST',
                         headers: {'Content-Type': 'application/json'},
                         mode: 'cors',
                         body: JSON.stringify({email, password})
                     })
            .then(response=>response.json())
            .then(json=>{
                if (json.error)
                    throw new Error(json.error.message);
                dispatch(receiveLogin(json))
                if(e){
                    dispatch(getUserCall(json.user.id, json.token))
                }
                
            })
            .catch(error=>dispatch(errorLogin(error.message)));
        }
    }
}

export function facebookLoginUserCall(url, email, userId, token, nav){
        return (dispatch) => {
            dispatch(requestLogin())
            fetch(`${url}`, {
                             method: 'POST',
                             headers: {'Content-Type': 'application/json'},
                             mode: 'cors',
                             body: JSON.stringify({email, userId, token})
                         })
                .then(response=>response.json())
                .then(json=>{
                    if (json.error)
                        throw new Error(json.error.message);
                    AsyncStorage.setItem('TOKEN', json.token, ()=> {
                        dispatch(receiveLogin(json))
                        if(json.user.firstLogin){
                            nav.navigate("FirstLogin")
                        }
                        else{
                            nav.navigate("SignedIn")
                        }
                      })
                    //alert(json.token);
                })
                .catch(error=>dispatch(errorLogin(error.message)));
            }
}

export function googleLoginUserCall(url, email, nav){
    return (dispatch) => {
        dispatch(requestLogin())
        fetch(`${url}`, {
                         method: 'POST',
                         headers: {'Content-Type': 'application/json'},
                         mode: 'cors',
                         body: JSON.stringify({email})
                     })
            .then(response=>response.json())
            .then(json=>{
                if (json.error)
                    throw new Error(json.error.message);
                AsyncStorage.setItem('TOKEN', json.token, ()=> {
                    dispatch(receiveLogin(json))
                    if(json.user.firstLogin){
                        nav.navigate("FirstLogin")
                    }
                    else{
                        nav.navigate("SignedIn")
                    }
                  })
                //alert(json.token);
            })
            .catch(error=>dispatch(errorLogin(error.message)));
        }
}

export function registerUserCall(url, email, firstName, lastName, password, nav){
    return (dispatch) => {
        dispatch(requestLogin());
        fetch(`${url}`, {
                         method: 'POST',
                         headers: {'Content-Type': 'application/json'},
                         mode: 'cors',
                         body: JSON.stringify({email, firstName, lastName, password})
                     })
            .then(response=>response.json())
            .then(json=>{
                if (json.error)
                    throw new Error(json.error.message);
                dispatch(registerUser())
                nav.navigate("Registered")
                
            })
            .catch(error=>dispatch(errorRegister(error.message)));
    };
}

export function facebookRegisterUserCall(url, email, firstName, lastName, userId, token, nav){
    return (dispatch) => {
        dispatch(requestLogin());
        fetch(`${url}`, {
                         method: 'POST',
                         headers: {'Content-Type': 'application/json'},
                         mode: 'cors',
                         body: JSON.stringify({email, firstName, lastName, userId, token})
                     })
            .then(response=>response.json())
            .then(json=>{
                if (json.error)
                    throw new Error(json.error.message);
                dispatch(registerUser())
                nav.navigate("Registered")
                
            })
            .catch(error=>dispatch(errorRegister(error.message)));
    };
}

export function googleRegisterUserCall(url, email, firstName, lastName, nav){
    return (dispatch) => {
        dispatch(requestLogin());
        fetch(`${url}`, {
                         method: 'POST',
                         headers: {'Content-Type': 'application/json'},
                         mode: 'cors',
                         body: JSON.stringify({email, firstName, lastName})
                     })
            .then(response=>response.json())
            .then(json=>{
                if (json.error)
                    throw new Error(json.error.message);
                dispatch(registerUser())
                nav.navigate("Registered")
                
            })
            .catch(error=>dispatch(errorRegister(error.message)));
    };
}

export function forgotUserCall(url, email, nav){
    return (dispatch) => {
        if (url && email){
        dispatch(requestLogin());
        fetch(`${url}`, {
                         method: 'POST',
                         headers: {'Content-Type': 'application/json'},
                         mode: 'cors',
                         body: JSON.stringify({email})
                     })
            .then(response=>response.json())
            .then(json=>{
                if (json.error)
                    throw new Error(json.error.message);
                dispatch(forgotUser())
                nav.navigate("Sent")
                
            })
            .catch(error=>dispatch(errorForgot(error.message)));
    };
}
}

