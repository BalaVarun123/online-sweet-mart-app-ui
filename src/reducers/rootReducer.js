import { combineReducers } from 'redux'
import adminReducer from './AdminReducers/AdminReducer';
import LoginReducer from './LoginReducers/LoginReducer';

export default function rootReducer(){
    return combineReducers({
        login : LoginReducer,
        admin : adminReducer
    });
}