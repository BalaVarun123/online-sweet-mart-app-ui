import {CUSTOMER_SHOW,CUSTOMER_ADD,CUSTOMER_UPDATE, CUSTOMER_DISPLAY_MESSAGE, CUSTOMER_REDIRECT_TO_UPDATE, CUSTOMER_SHOW_ALL, CUSTOMER_ADD_SWEET_ITEM_ID, CUSTOMER_REMOVE_SWEET_ITEM_ID, CUSTOMER_RESET_SWEET_ITEM_IDS ,CUSTOMER_ADD_SWEET_ORDER_ID, CUSTOMER_REMOVE_SWEET_ORDER_ID, CUSTOMER_REDIRECT_TO_SHOW, CUSTOMER_RESET_SWEET_ORDER_IDS,
    CUSTOMER_ADD_CART_ID, CUSTOMER_REMOVE_CART_ID, CUSTOMER_RESET_CART_IDS} from "../actionTypes/CustomerActionTypes"

    export const _addCustomer = (customer) => {
    return {
        type : CUSTOMER_ADD,
        customer : customer
    }
}

export const _updateCustomer = (customer) => {
    return {
        type : CUSTOMER_UPDATE,
        customer:customer
    }
}


export function _showCustomer(customer = {},message = ""){
    return {
        type : CUSTOMER_SHOW,
        customer : customer,
        message : message
    }
}

export function _displayMessage(message) {
    return {
        type : CUSTOMER_DISPLAY_MESSAGE,
        message : message
    }
}

export function _redirectToUpdate(value,redirectionId = 0) {
    return {
        type : CUSTOMER_REDIRECT_TO_UPDATE,
        value : value,
        redirectionId : redirectionId
    }
}

export function _redirectToShow(value,redirectionId = 0) {
    return {
        type : CUSTOMER_REDIRECT_TO_SHOW,
        value : value,
        redirectionId : redirectionId
    }
}

export function _showAllCustomer(customerList = [],message = ""){
    return {
        type : CUSTOMER_SHOW_ALL,
        customerList : customerList,
        message : message
    }
}

export function _addSweetOrderId(id) {
    return {
        type : CUSTOMER_ADD_SWEET_ORDER_ID,
        id : id
    }
}

export function _removeSweetOrderId(id) {
    return {
        type : CUSTOMER_REMOVE_SWEET_ORDER_ID,
        id : id
    }
}

export function _resetSweetOrderId() {
    return {
        type : CUSTOMER_RESET_SWEET_ORDER_IDS
    }
}
export function _addSweetItemId(id) {
    return {
        type : CUSTOMER_ADD_SWEET_ITEM_ID,
        id : id
    }
}

export function _removeSweetItemId(id) {
    return {
        type : CUSTOMER_REMOVE_SWEET_ITEM_ID,
        id : id
    }
}

export function _resetSweetItemId() {
    return {
        type : CUSTOMER_RESET_SWEET_ITEM_IDS
    }
}
export function _addCartId(id) {
    return {
        type : CUSTOMER_ADD_CART_ID,
        id : id
    }
}

export function _removeCartId(id) {
    return {
        type : CUSTOMER_REMOVE_CART_ID,
        id : id
    }
}

export function _resetCartId() {
    return {
        type : CUSTOMER_RESET_CART_IDS
    }
}


