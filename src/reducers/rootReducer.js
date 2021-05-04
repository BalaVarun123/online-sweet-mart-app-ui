import { combineReducers } from 'redux';
import LoginReducer from './LoginReducers/LoginReducer';
import cartReducer from './CartReducers/cartReducer';
import { combineReducers } from 'redux'
import adminReducer from './AdminReducers/AdminReducer';
import LoginReducer from './LoginReducers/LoginReducer';
import orderBillReducer from './OrderBillReducers/OrderBillReducer';
import productReducer from './ProductReducers/productReducer';


export default function rootReducer(){
    return combineReducers({
        login : LoginReducer,
        cartReducer : cartReducer,
        admin : adminReducer,
<<<<<<< HEAD
        orderBill:orderBillReducer,
        product:productReducer
=======
        orderBill:orderBillReducer

>>>>>>> fad970366488fc97f1d44895697ca0013dcb7495
    });
}