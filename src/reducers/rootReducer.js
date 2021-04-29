import { combineReducers } from 'redux'
import LoginReducer from './LoginReducers/LoginReducer';

export default function rootReducer(){
    return combineReducers({
        login : LoginReducer
    });
}