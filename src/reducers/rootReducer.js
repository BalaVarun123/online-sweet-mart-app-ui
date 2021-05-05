import cartReducer from './CartReducers/cartReducer';
import adminReducer from './AdminReducers/AdminReducer';
import orderBillReducer from './OrderBillReducers/OrderBillReducer';
import ProductReducer from './ProductReducers/productReducer';

export default function rootReducer(){
    return combineReducers({
        login : LoginReducer,
        cartReducer : cartReducer,
        admin : adminReducer,
        orderBill : orderBillReducer,
        product : ProductReducer

    });
}