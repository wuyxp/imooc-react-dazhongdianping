import { combineReducers } from 'redux'
import userinfo from './userinfo'
import todo from './todo'
export default combineReducers({
    userinfo,
    todo
})
