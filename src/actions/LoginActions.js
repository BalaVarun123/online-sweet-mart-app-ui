import { USER_LOGIN, USER_LOGIN_FAILED, USER_LOGIN_SUCCESSFUL, USER_LOGOUT, USER_LOGOUT_FAILED, USER_LOGOUT_SUCCESSFUL } from "../actionTypes/LoginActionTypes"

export function getLoginAction(userId , password){
    return {
        type : USER_LOGIN,
        userId,
        password
    }
}
export function getLogoutAction(){
    return {
        type : USER_LOGOUT
    }
}
export function getLoginSuccessfulAction(){
    return {
        type : USER_LOGIN_SUCCESSFUL
    }
}

export function getLogoutSuccessfulAction(){
    return {
        type : USER_LOGOUT_SUCCESSFUL
    }
}

export function getLoginFailedAction(){
    return {
        type : USER_LOGIN_FAILED
    }
}

export function getLogoutFailedAction(){
    return {
        type : USER_LOGOUT_FAILED
    }
}
