import {ADMIN_ADD,ADMIN_UPDATE,ADMIN_DELETE,ADMIN_SHOW,ADMIN_SHOW_ALL} from "../actionTypes/AdminActionTypes";


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