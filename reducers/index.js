import { combineReducers } from 'redux'
import {user} from './user'
import {country} from './country'
import {major} from './major'
import {usState} from './state'
import {scholarship} from './scholarship'
import {gpaSchool} from './gpaSchool'
import {majorSchool} from './majorSchool'
import {blog} from './blog'
import {forum} from './forum'
import {referral} from './referral'

export const rootReducer = combineReducers({
    user,
    country,
    major,
    usState,
    scholarship,
    gpaSchool,
    majorSchool,
    blog,
    forum,
    referral
});