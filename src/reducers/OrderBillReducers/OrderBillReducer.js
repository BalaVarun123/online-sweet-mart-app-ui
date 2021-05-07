import {ORDER_BILL_ADD_SWEET_ORDER_ID, ORDER_BILL_DISPLAY_MESSAGE, ORDER_BILL_REDIRECT_TO_SHOW, ORDER_BILL_REDIRECT_TO_UPDATE, ORDER_BILL_REMOVE_SWEET_ORDER_ID, ORDER_BILL_RESET_SWEET_ORDER_IDS, ORDER_BILL_SHOW, ORDER_BILL_SHOW_ALL} from "../../actionTypes/OrderBillActionTypes"
const defaultState = {
    orderBill : null,
    orderBillList : [],
    sweetOrderIds : new Set(),
    processing : false,
    redirectToUpdate : false,
    redirectToShow : false,
    redirectionId : 0,
    message:""
}


export default (state = defaultState,action) => {
    let newState = {...state};
    switch (action.type){
        case ORDER_BILL_SHOW :
            newState.orderBill = action.orderBill;
            newState.message = action.message;
            newState.sweetOrderIds = (action.orderBill)?new Set(action.orderBill.listSweetOrder.map((sweetOrder) => sweetOrder.sweetOrderId)):null;
            break;
        case ORDER_BILL_DISPLAY_MESSAGE:
            newState.message = action.message;
            break;
        case ORDER_BILL_REDIRECT_TO_UPDATE: 
            newState.redirectToUpdate = action.value;
            newState.orderBill = null;
            newState.redirectionId = action.redirectionId;
            break;
        case ORDER_BILL_REDIRECT_TO_SHOW:
            newState.redirectToShow = action.value;
            newState.orderBill = null;
            newState.redirectionId = action.redirectionId;
            break;
        case ORDER_BILL_SHOW_ALL:
            newState.orderBillList = action.orderBillList;
            newState.message = action.message;
            break;
        case ORDER_BILL_ADD_SWEET_ORDER_ID:
            newState.sweetOrderIds.add(action.id);
            break;
        case ORDER_BILL_REMOVE_SWEET_ORDER_ID:
            newState.sweetOrderIds.delete(action.id);
            break;
        case ORDER_BILL_RESET_SWEET_ORDER_IDS:
            newState.sweetOrderIds.clear();
            break;
        default :
            newState = state;
    }
    return newState;
}