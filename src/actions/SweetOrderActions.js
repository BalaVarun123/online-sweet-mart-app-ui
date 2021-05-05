import {SWEET_ORDER_SHOW,SWEET_ORDER_REDIRECT_TO_UPDATE,SWEET_ORDER_DISPLAY_MESSAGE} from "../actionTypes/SweetOrderActionTypes";


export const _showSweetOrder = (sweetOrder) => {
    return {
        type : SWEET_ORDER_SHOW,
        payload : sweetOrder
    }
}

export const _sweetOrderRedirectToUpdate = (value) => {
    return {
        type : SWEET_ORDER_REDIRECT_TO_UPDATE,
        payload : value
    }
}

export const _sweetOrderDisplayMessage = (message) => {
    return {
        type : SWEET_ORDER_DISPLAY_MESSAGE,
        payload : message
    }
}