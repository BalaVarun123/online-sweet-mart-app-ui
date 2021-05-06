import {CUSTOMER_ADD_SWEET_ORDER_ID, CUSTOMER_ADD_SWEET_ITEM_ID,CUSTOMER_ADD_CART_ID, CUSTOMER_DISPLAY_MESSAGE, 
    CUSTOMER_REDIRECT_TO_SHOW, CUSTOMER_REDIRECT_TO_UPDATE, CUSTOMER_REMOVE_SWEET_ORDER_ID, CUSTOMER_REMOVE_SWEET_ITEM_ID,
     CUSTOMER_REMOVE_CART_ID,CUSTOMER_RESET_SWEET_ORDER_IDS,CUSTOMER_RESET_SWEET_ITEM_IDS, CUSTOMER_RESET_CART_IDS,
     CUSTOMER_SHOW, CUSTOMER_SHOW_ALL} from "../../actionTypes/CustomerActionTypes"
const defaultState = {
    customer : null,
    customerList : [],
    sweetOrderIds : new Set(),
    sweetItemIds : new Set(),
    cartId : 0,
    processing : false,
    redirectToUpdate : false,
    redirectToShow : false,
    redirectionId : 0,
    message:""
}
export default (state = defaultState,action) => {
    let newState = {...state};
    switch (action.type){
        case CUSTOMER_SHOW :
            newState.customer = action.customer;
            newState.message = action.message;
            newState.sweetOrderIds = new Set(action.customer.sweetOrders.map((sweetOrder) => sweetOrder.sweetOrderId));
            newState.sweetItemIds = new Set(action.customer.sweetItems.map((sweetItem) => sweetItem.orderItemId));
            newState.cartId = action.customer.cart.cartId;
            break;
        case CUSTOMER_DISPLAY_MESSAGE:
            newState.message = action.message;
            break;
        case CUSTOMER_REDIRECT_TO_UPDATE: 
            newState.redirectToUpdate = action.value;
            newState.customer = null;
            newState.redirectionId = action.redirectionId;
            break;
        case CUSTOMER_REDIRECT_TO_SHOW:
            newState.redirectToShow = action.value;
            newState.customer = null;
            newState.redirectionId = action.redirectionId;
            break;
        case CUSTOMER_SHOW_ALL:
            newState.customerList = action.customerList;
            newState.message = action.message;
            break;
        case CUSTOMER_ADD_SWEET_ORDER_ID:
            newState.sweetOrderIds.add(action.id);
            break;
        case CUSTOMER_REMOVE_SWEET_ORDER_ID:
            newState.sweetOrderIds.delete(action.id);
            break;
        case CUSTOMER_RESET_SWEET_ORDER_IDS:
            newState.sweetOrderIds.clear();
            break;
        case CUSTOMER_ADD_SWEET_ITEM_ID:
            newState.sweetItemIds.add(action.id);
            break;
        case CUSTOMER_REMOVE_SWEET_ITEM_ID:
            newState.sweetItemIds.delete(action.id);
            break;
        case CUSTOMER_RESET_SWEET_ITEM_IDS:
            newState.sweetItemIds.clear();
            break;
        case CUSTOMER_ADD_CART_ID:
            newState.cartIds.add(action.id);
            break;
        case CUSTOMER_REMOVE_CART_ID:
            newState.cartIds.delete(action.id);
            break;
        // case CUSTOMER_RESET_CART_IDS:
        //     newState.cartIds.clear();
        //     break;
        default :
            newState = state;
    }
    return newState;
}