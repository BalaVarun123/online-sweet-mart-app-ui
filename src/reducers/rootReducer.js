import cartReducer from './CartReducers/cartReducer';
import adminReducer from './AdminReducers/AdminReducer';
import orderBillReducer from './OrderBillReducers/OrderBillReducer';
import ProductReducer from './ProductReducers/productReducer';
import { combineReducers } from 'redux';
import LoginReducer from './LoginReducers/LoginReducer';
import sweetOrderReducer from "./SweetOrderReducers/SweetOrderReducer";

export default function rootReducer(){
    return combineReducers({
        login : LoginReducer,
        cartReducer : cartReducer,
        admin : adminReducer,
        orderBill : orderBillReducer,
        product : ProductReducer,
        sweetOrder : sweetOrderReducer

    });
}