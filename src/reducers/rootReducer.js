import { combineReducers } from 'redux'
import adminReducer from './AdminReducers/AdminReducer';
import LoginReducer from './LoginReducers/LoginReducer';
import orderBillReducer from './OrderBillReducers/OrderBillReducer';
import CustomerReducer from './CustomerReducers/CustomerReducer';
export default function rootReducer(){
    return combineReducers({
        login : LoginReducer,
        admin : adminReducer,
        orderBill:orderBillReducer,
        customer : CustomerReducer
    });
}