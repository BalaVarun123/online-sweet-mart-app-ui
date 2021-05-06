import { LOGIN_REDIRECT_TO_DASHBOARD, USER_LOGIN, USER_LOGIN_FAILED, USER_LOGIN_SUCCESSFUL, USER_LOGOUT, USER_LOGOUT_FAILED, USER_LOGOUT_SUCCESSFUL } from "../actionTypes/LoginActionTypes"

export function getLoginAction(userId, password) {
    return {
        type: USER_LOGIN,
        userId,
        password
    }
}
export function getLogoutAction() {
    return {
        type: USER_LOGOUT
    }
}
export function getLoginSuccessfulAction(message,userDetails) {
    return {
        type: USER_LOGIN_SUCCESSFUL,
        payload : {
            message:message,
            userDetails:userDetails
        }
    }
}

export function getLogoutSuccessfulAction(message) {
    return {
        type: USER_LOGOUT_SUCCESSFUL
    }
}

export function getLoginFailedAction(message) {
    return {
        type: USER_LOGIN_FAILED,
        payload : {
            message:message,
            userDetails:null
        }
    }
}

export function getLogoutFailedAction() {
    return {
        type: USER_LOGOUT_FAILED
    }
}


export function redirectToDashboard(value){
    return {
        type : LOGIN_REDIRECT_TO_DASHBOARD,
        payload : value
    }
}
