
  
import { SWEET_ITEM_ADD,SWEET_ITEM_UPDATE,SWEET_ITEM_SHOW,SWEET_ITEM_DISPLAY_MESSAGE,SWEET_ITEM_REDIRECT_TO_UPDATE,SWEET_ITEM_REDIRECT_TO_SHOW,SWEET_ITEM_SHOW_ALL,SWEET_ITEM_ADD_PRODUCT_ID,SWEET_ITEM_REMOVE_PRODUCT_ID,SWEET_ITEM_RESET_PRODUCT_IDS,SWEET_ITEM_ADD_SWEET_ORDER_ID,SWEET_ITEM_REMOVE_SWEET_ORDER_ID,SWEET_ITEM_RESET_SWEET_ORDER_IDS } from "../actionTypes/SweetItemActionTypes";
export const _addSweetItem = (sweetItem) => {
    return {
        type : SWEET_ITEM_ADD,
        sweetItem : sweetItem
    }
}

export const _updateSweetItem = (sweetItem) => {
    return {
        type : SWEET_ITEM_UPDATE,
        sweetItem : sweetItem
    }
}


export function _showSweetItem(sweetItem = {},message = ""){
    return {
        type : SWEET_ITEM_SHOW,
        sweetItem : sweetItem,
        message : message
    }
}

export function _displayMessage(message) {
    return {
        type : SWEET_ITEM_DISPLAY_MESSAGE,
        message : message
    }
}

export function _redirectToUpdate(value,redirectionId = 0) {
    return {
        type : SWEET_ITEM_REDIRECT_TO_UPDATE,
        value : value,
        redirectionId : redirectionId
    }
}

export function _redirectToShow(value,redirectionId = 0) {
    return {
        type : SWEET_ITEM_REDIRECT_TO_SHOW,
        value : value,
        redirectionId : redirectionId
    }
}

export function _showAllSweetItem(sweetItemList = [],message = ""){
    return {
        type : SWEET_ITEM_SHOW_ALL,
        sweetItemList : sweetItemList,
        message : message
    }
}
export function _addProductId(id) {
    return {
        type : SWEET_ITEM_ADD_PRODUCT_ID,
        id : id
    }
}

export function _removeProductId(id) {
    return {
        type : SWEET_ITEM_REMOVE_PRODUCT_ID,
        id : id
    }
}

export function _resetProductId() {
    return {
        type : SWEET_ITEM_RESET_PRODUCT_IDS,
    }
}

export function _addSweetOrderId(id) {
    return {
        type : SWEET_ITEM_ADD_SWEET_ORDER_ID,
        id : id
    }
}

export function _removeSweetOrderId(id) {
    return {
        type : SWEET_ITEM_REMOVE_SWEET_ORDER_ID,
        id : id
    }
}

export function _resetSweetOrderId() {
    return {
        type : SWEET_ITEM_RESET_SWEET_ORDER_IDS
    }
}
