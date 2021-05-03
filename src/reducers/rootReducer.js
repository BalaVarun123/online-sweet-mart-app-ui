import { combineReducers } from 'redux';
import LoginReducer from './LoginReducers/LoginReducer';
import cartReducer from './CartReducers/cartReducer';

export default function rootReducer(){
    return combineReducers({
        login : LoginReducer,
        cartReducer : cartReducer
    });
}