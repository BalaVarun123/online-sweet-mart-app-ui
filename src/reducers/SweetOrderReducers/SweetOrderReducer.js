import {SWEET_ORDER_SHOW,SWEET_ORDER_REDIRECT_TO_UPDATE,SWEET_ORDER_DISPLAY_MESSAGE} from "../../actionTypes/SweetOrderActionTypes";
const defaultState = {
    sweetOrder : null,
    message : "",
    redirectToUpdate : false
}


const sweetOrderReducer  = (state = defaultState, action) =>{
    let newState = {...state};
    switch (action.type){
        case SWEET_ORDER_SHOW : 
            newState.sweetOrder = action.payload;
            break;
        case SWEET_ORDER_REDIRECT_TO_UPDATE:
            newState.redirectToUpdate = action.payload;
            break;
        case SWEET_ORDER_DISPLAY_MESSAGE :
            newState.message = action.payload;
            break;
        default :
            newState = state;
    }
    return newState;
}

export default  sweetOrderReducer;