import { SWEET_ITEM_ADD,SWEET_ITEM_UPDATE,SWEET_ITEM_SHOW,SWEET_ITEM_DISPLAY_MESSAGE,SWEET_ITEM_REDIRECT_TO_UPDATE,SWEET_ITEM_REDIRECT_TO_SHOW,SWEET_ITEM_SHOW_ALL,SWEET_ITEM_ADD_PRODUCT_ID,SWEET_ITEM_REMOVE_PRODUCT_ID,SWEET_ITEM_RESET_PRODUCT_IDS,SWEET_ITEM_ADD_SWEET_ORDER_ID,SWEET_ITEM_REMOVE_SWEET_ORDER_ID,SWEET_ITEM_RESET_SWEET_ORDER_IDS } from "../../actionTypes/SweetItemActionTypes"

const defaultState = {
    sweetItem : null,
    sweetItemList : [],
    productIds : new Set(),
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
        case SWEET_ITEM_SHOW :
            newState.sweetItem = action.sweetItem;
            newState.message = action.message;
            // newState.productIds = new Set(action.sweetItem.Product.map((product) =>product.productId)) ;
            // newState.sweetOrderIds = new Set(action.sweetItem.SweetOrder.map((sweetOrder) => sweetOrder.sweetOrderId));
            break;
        case SWEET_ITEM_DISPLAY_MESSAGE:
            newState.message = action.message;
            break;
        case SWEET_ITEM_REDIRECT_TO_UPDATE: 
            newState.redirectToUpdate = action.value;
            newState.sweetItem = null;
            newState.redirectionId = action.redirectionId;
            break;
        case SWEET_ITEM_REDIRECT_TO_SHOW:
            newState.redirectToShow = action.value;
            newState.sweetItem = null;
            newState.redirectionId = action.redirectionId;
            break;
        case SWEET_ITEM_SHOW_ALL:
            newState.sweetItemList = action.sweetItemList;
            newState.message = action.message;
            break;
        case SWEET_ITEM_ADD:
            newState.sweetItem = action.sweetItem;
            break;
        
        default :
                newState = state;
    }
    return newState;
}
