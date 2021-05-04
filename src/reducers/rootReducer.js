import { combineReducers } from 'redux';
import cartReducer from './CartReducers/cartReducer';
import adminReducer from './AdminReducers/AdminReducer';
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
        orderBill : orderBillReducer
>>>>>>> 2a1d34bef89d8270686dbd36668249a5807eb564

    });
}