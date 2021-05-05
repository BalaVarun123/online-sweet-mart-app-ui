import {ADMIN_ADD,ADMIN_UPDATE,ADMIN_DELETE,ADMIN_SHOW,ADMIN_SHOW_ALL, ADMIN_REDIRECT_TO_UPDATE, ADMIN_DISPLAY_MESSAGE} from "../actionTypes/AdminActionTypes";


export function _showAdmin(admin = {},processing = false,message = ""){
    return {
        type : ADMIN_SHOW,
        admin,
        processing,
        message
    }
}



export function _showAllAdmins(adminList = [],message = ""){
    return {
        type : ADMIN_SHOW_ALL,
        adminList : adminList,
        message : message
    }
}


export function _adminRedirectToUpdate(value = true,redirectionId = 0){
    return {
        type : ADMIN_REDIRECT_TO_UPDATE,
        value: value,
        redirectionId:redirectionId
    }
}

export function _updateAdmin(admin,message){
    return {
        type : ADMIN_UPDATE,
        admin,
        message
    }
}

export function _deleteAdmin(id) {
    return {
        type : ADMIN_DELETE,
        id : id
    }
}


export function _addAdmin(admin,message,redirectToShow) {
    return {
        type : ADMIN_ADD,
        admin : admin,
        message : message,
        redirectToShow : redirectToShow
    }
}


export function _displayMessage(message) {
    return {
        type : ADMIN_DISPLAY_MESSAGE,
        message : message
    }
}