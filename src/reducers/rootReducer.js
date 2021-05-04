import { combineReducers } from 'redux'
import adminReducer from './AdminReducers/AdminReducer';
import LoginReducer from './LoginReducers/LoginReducer';
import orderBillReducer from './OrderBillReducers/OrderBillReducer';
import productReducer from './ProductReducers/productReducer';

export default function rootReducer(){
    return combineReducers({
        login : LoginReducer,
        admin : adminReducer,
        orderBill:orderBillReducer,
        product:productReducer
    });
}