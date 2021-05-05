import {ADMIN_ADD,ADMIN_UPDATE,ADMIN_DELETE,ADMIN_SHOW,ADMIN_SHOW_ALL, ADMIN_REDIRECT_TO_UPDATE, ADMIN_DISPLAY_MESSAGE} from "../../actionTypes/AdminActionTypes";

const defaultState = {
    admin : null,
    adminList:null,
    processing : false,
    message : "",
    redirectToUpdate : false,
    redirectToShow : false,
    redirectionId : 0
}

export default function adminReducer(state = defaultState , action){
    let newState = {...state};
    switch (action.type){
        case ADMIN_SHOW:
            newState.admin = action.admin;
            newState.processing = action.processing;
            newState.message = action.message;
            newState.redirectToShow = false;
            break;
        case ADMIN_SHOW_ALL :
            newState.adminList = action.adminList;
            newState.message = action.message;
            break;
        case ADMIN_REDIRECT_TO_UPDATE:
            newState.redirectToUpdate = action.value;
            newState.redirectionId = action.redirectionId;
            newState.admin = null;
            break;
        case ADMIN_UPDATE :
            if (action.admin!=null)
            newState.admin = action.admin;
            newState.message = action.message;
            break;
        case ADMIN_ADD:
            if (action.admin!=null)
            newState.admin = action.admin;
            newState.message = action.message;
            newState.redirectToShow = action.redirectToShow;
            break;
        case ADMIN_DISPLAY_MESSAGE :
            newState.message = action.message;
            break;
        default :
            newState = state;
    }
    return newState;
}

