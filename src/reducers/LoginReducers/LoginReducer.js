import { USER_LOGIN, USER_LOGIN_FAILED, USER_LOGIN_SUCCESSFUL, USER_LOGOUT, USER_LOGOUT_FAILED, USER_LOGOUT_SUCCESSFUL } from "../../actionTypes/LoginActionTypes";

const defaultState = {
    processing : false,
    isLoggedIn : false,
    userId : -1,
    userType : null,
    tempUserDetails : null,
    userId:null
}


const LoginReducer = (state = defaultState , action) => {
    let newState = {...state};
    switch (action.userType){
        case USER_LOGIN:
            newState.processing = true;
            newState.tempUserDetails = {userId : action.userId, password : action.password};
            break;
        case USER_LOGOUT:
            newState.processing = true;
            //newState.userId = action.userId;
            break;
        case USER_LOGIN_SUCCESSFUL:
            newState.processing = false;
            newState.userId = state.tempUserDetails.userId;
            newState.tempUserDetails = null;
            break;
        case USER_LOGIN_FAILED:
            newState.processing = false;
            newState.tempUserDetails = null;
            break;
        case USER_LOGOUT_SUCCESSFUL:
            newState.processing = false;
            newState.userId = -1;
            newState.tempUserDetails = null;
            break;
        case  USER_LOGOUT_FAILED:
            newState.processing = false;
            newState.tempUserDetails = null;
            break;
    }
    return newState;
}

export default LoginReducer;

