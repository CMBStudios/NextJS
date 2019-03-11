import {errorMajor, receiveMajor, requestMajor} from '../actions/major';
import {errorStates, receiveStates, requestStates} from '../actions/state';
import {errorReferral, receiveReferral, requestReferral} from '../actions/referral';
import {errorCountry, receiveCountry, requestCountry} from '../actions/country';
import {getUserCall, refreshUserCall} from './user';
import _ from 'lodash';

export function getReferralsCall(url, userId, token){
    return (dispatch) => {
        dispatch(requestReferral())
        fetch(`${url}`.replace('{user_id}', userId), {
                         method: 'POST',
                         headers: {'Content-Type': 'application/json', 'Authorization': `${token}`},
                         mode: 'cors'
                     })
            .then(response=>response.json())
            .then(json=>{
                if (json.error)
                    throw new Error(json.error.message);
                dispatch(receiveReferral(json))
            })
            .catch(error=>dispatch(errorReferral(error.message)));
        }
}

export function getMajorsCall(url){
    return (dispatch) => {
        dispatch(requestMajor())
        fetch(`${url}`, {
                         method: 'GET',  
                         headers: {'Content-Type': 'application/json'},
                         mode: 'cors'
                     })
            .then(response=>response.json())
            .then(json=>{
                if (json.error)
                    throw new Error(json.error.message);
                    dispatch(receiveMajor(json))
            })
            .catch(error=>dispatch(errorMajor(error.message)));
        }
}

export function getStatesCall(url){
    return (dispatch) => {
        let firstMajor = {
            label: 'All',
            value: 'All'
        }
        dispatch(requestStates())
        fetch(`${url}`, {
                         method: 'GET',  
                         headers: {'Content-Type': 'application/json'},
                         mode: 'cors'
                     })
            .then(response=>response.json())
            .then(json=>{
                if (json.error)
                    throw new Error(json.error.message);
                    dispatch(receiveStates([firstMajor, ...json]))
            })
            .catch(error=>dispatch(errorStates(error.message)));
        }
}

export function getApplicantCountriesCall(url){
    return (dispatch) => {
        dispatch(requestCountry())
        fetch(`${url}`, {
                         method: 'GET',  
                         headers: {'Content-Type': 'application/json'},
                         mode: 'cors'
                     })
            .then(response=>response.json())
            .then(json=>{
                if (json.error)
                    throw new Error(json.error.message);
                    dispatch(receiveCountry(json))
            })
            .catch(error=>dispatch(errorCountry(error.message)));
        }
}
