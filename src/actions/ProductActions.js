import {ADD_PRODUCT,UPDATE_PRODUCT,SHOW_ALL_PRODUCTS,SHOW_SELECTED_PRODUCT ,REMOVE_SELECTED_PRODUCT,DISPLAY_MESSAGE,REDIRECT_TO_SHOW,REDIRECT_TO_UPDATE} from '../actionTypes/ProductActionTypes';
export const _addProduct = (product) => {
    return {
        type : ADD_PRODUCT,
        product : product
    }
}

export const _updateProduct = (product) => {
    return {
        type : UPDATE_PRODUCT,
        product : product
    }
}


export function _showProduct(product = {},message = ""){
    return {
        type : SHOW_SELECTED_PRODUCT,
        product : product,
        message : message
    }
}

export function _displayMessage(message) {
    return {
        type : DISPLAY_MESSAGE,
        message : message
    }
}

export function _redirectToUpdate(value,redirectionId) {
    return {
        type : REDIRECT_TO_UPDATE,
        value : value,
        redirectionId : redirectionId
    }
}

export function _redirectToShow(value,redirectionId) {
    return {
        type : REDIRECT_TO_SHOW,
        value : value,
        redirectionId : redirectionId
    }
}

export function _showAllProduct(productList = [],message = ""){
    return {
        type : SHOW_ALL_PRODUCTS,
        productList : productList,
        message : message
    }
}


