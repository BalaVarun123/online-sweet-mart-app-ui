import {ADMIN_ADD,ADMIN_UPDATE,ADMIN_DELETE,ADMIN_SHOW,ADMIN_SHOW_ALL} from "../../actionTypes/AdminActionTypes";

const defaultState = {
    admin : null,
    adminList:null,
    processing : false,
    message : ""
}

export default function adminReducer(state = defaultState , action){
    let newState = {...state};
    switch (action.type){
        case ADMIN_SHOW:
            newState.admin = action.admin;
            newState.processing = action.processing;
            newState.message = action.message;
            break;
        case ADMIN_SHOW_ALL :
            newState.adminList = action.adminList;
            newState.processing = action.processing;
            newState.message = action.message;
            break;
        default :
            newState = state;
    }
    return newState;
}

