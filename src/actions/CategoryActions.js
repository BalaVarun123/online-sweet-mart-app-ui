import {CATEGORY_SHOW,CATEGORY_ADD,CATEGORY_UPDATE, CATEGORY_DISPLAY_MESSAGE, CATEGORY_REDIRECT_TO_UPDATE, CATEGORY_SHOW_ALL, CATEGORY_REDIRECT_TO_SHOW} from "../actionTypes/CategoryActionTypes"
export const _addCategory = (category) => {
    return {
        type : CATEGORY_ADD,
        category : category
    }
}

export const _updatecategory = (category) => {
    return {
        type : CATEGORY_UPDATE,
        category:category
    }
}


export function _showcategory(category = {},message = ""){
    return {
        type : CATEGORY_SHOW,
        category : category,
        message : message
    }
}

export function _displayMessage(message) {
    return {
        type : CATEGORY_DISPLAY_MESSAGE,
        message : message
    }
}

export function _redirectToUpdate(value,redirectionId = 0) {
    return {
        type : CATEGORY_REDIRECT_TO_UPDATE,
        value : value,
        redirectionId : redirectionId
    }
}

export function _redirectToShow(value,redirectionId = 0) {
    return {
        type : CATEGORY_REDIRECT_TO_SHOW,
        value : value,
        redirectionId : redirectionId
    }
}

export function _showAllcategory(categoryList = [],message = ""){
    return {
        type : CATEGORY_SHOW_ALL,
        categoryList : categoryList,
        message : message
    }
}