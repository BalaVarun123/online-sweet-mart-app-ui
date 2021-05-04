import {ORDER_BILL_SHOW,ORDER_BILL_ADD,ORDER_BILL_UPDATE, ORDER_BILL_DISPLAY_MESSAGE, ORDER_BILL_REDIRECT_TO_UPDATE, ORDER_BILL_SHOW_ALL, ORDER_BILL_ADD_SWEET_ORDER_ID, ORDER_BILL_REMOVE_SWEET_ORDER_ID, ORDER_BILL_REDIRECT_TO_SHOW, ORDER_BILL_RESET_SWEET_ORDER_IDS} from "../actionTypes/OrderBillActionTypes"
export const _addOrderBill = (orderBill) => {
    return {
        type : ORDER_BILL_ADD,
        orderBill : orderBill
    }
}

export const _updateOrderBill = (orderBill) => {
    return {
        type : ORDER_BILL_UPDATE,
        orderBill:orderBill
    }
}


export function _showOrderBill(orderBill = {},message = ""){
    return {
        type : ORDER_BILL_SHOW,
        orderBill : orderBill,
        message : message
    }
}

export function _displayMessage(message) {
    return {
        type : ORDER_BILL_DISPLAY_MESSAGE,
        message : message
    }
}

export function _redirectToUpdate(value,redirectionId = 0) {
    return {
        type : ORDER_BILL_REDIRECT_TO_UPDATE,
        value : value,
        redirectionId : redirectionId
    }
}

export function _redirectToShow(value,redirectionId = 0) {
    return {
        type : ORDER_BILL_REDIRECT_TO_SHOW,
        value : value,
        redirectionId : redirectionId
    }
}

export function _showAllOrderBill(orderBillList = [],message = ""){
    return {
        type : ORDER_BILL_SHOW_ALL,
        orderBillList : orderBillList,
        message : message
    }
}

export function _addSweetOrderId(id) {
    return {
        type : ORDER_BILL_ADD_SWEET_ORDER_ID,
        id : id
    }
}

export function _removeSweetOrderId(id) {
    return {
        type : ORDER_BILL_REMOVE_SWEET_ORDER_ID,
        id : id
    }
}

export function _resetSweetOrderId() {
    return {
        type : ORDER_BILL_RESET_SWEET_ORDER_IDS
    }
}

