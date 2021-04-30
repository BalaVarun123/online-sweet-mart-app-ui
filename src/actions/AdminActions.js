import {ADMIN_ADD,ADMIN_UPDATE,ADMIN_DELETE,ADMIN_SHOW,ADMIN_SHOW_ALL, ADMIN_REDIRECT_TO_UPDATE} from "../actionTypes/AdminActionTypes";


export function _showAdmin(admin = {},processing = false,message = ""){
    return {
        type : ADMIN_SHOW,
        admin,
        processing,
        message
    }
}


export function _showAllAdmins(adminList = [],processing = false,message = ""){
    return {
        type : ADMIN_SHOW_ALL,
        adminList,
        processing,
        message
    }
}


export function _adminRedirectToUpdate(value = true){
    return {
        type : ADMIN_REDIRECT_TO_UPDATE,
        value
    }
}

export function _updateAdmin(admin,message){
    return {
        type : ADMIN_UPDATE,
        admin,
        message
    }
}