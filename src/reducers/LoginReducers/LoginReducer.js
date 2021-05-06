import { LOGIN_SET_LOGIN_STATE,USER_LOGIN, USER_LOGIN_FAILED, USER_LOGIN_SUCCESSFUL, USER_LOGOUT, USER_LOGOUT_FAILED, USER_LOGOUT_SUCCESSFUL } from "../../actionTypes/LoginActionTypes";

const defaultState = {
    processing : false,
    isLoggedIn : (localStorage.getItem("isLoggedIn") == "true"),
    userId : (localStorage.getItem("userId")) ? (localStorage.getItem("userId")) : -1,
    userType : null,
    tempUserDetails : null,
    message : ""
}


const LoginReducer = (state = defaultState , action) => {
    let newState = {...state};
    switch (action.type){
        case USER_LOGIN:
            newState.processing = true;
            newState.tempUserDetails = {userId : action.userId, password : action.password};
            newState.message = "Please wait";
            break;
        case USER_LOGOUT:
            newState.processing = true;
            newState.message = "Please wait";
            //newState.userId = action.userId;
            break;
        case USER_LOGIN_SUCCESSFUL:
            newState.processing = false;
            newState.userId = state.tempUserDetails.userId;
            newState.tempUserDetails = null;
            newState.message = action.payload;
            newState.isLoggedIn = true;
            newState.message = "";
            break;
        case USER_LOGIN_FAILED:
            newState.processing = false;
            newState.tempUserDetails = null;
            newState.message = action.payload;
            break;
        case USER_LOGOUT_SUCCESSFUL:
            newState.processing = false;
            newState.userId = -1;
            newState.tempUserDetails = null;
            newState.isLoggedIn = false;
            break;
        case  USER_LOGOUT_FAILED:
            newState.processing = false;
            newState.tempUserDetails = null;
            break;
        case  LOGIN_SET_LOGIN_STATE:
            newState.isLoggedIn = action.payload;
            break;
        default :
            newState = state;
    }
    return newState;
}

export default LoginReducer;

