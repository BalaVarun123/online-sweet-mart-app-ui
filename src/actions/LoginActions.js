import { LOGIN_SET_LOGIN_STATE, USER_LOGIN, USER_LOGIN_FAILED, USER_LOGIN_SUCCESSFUL, USER_LOGOUT, USER_LOGOUT_FAILED, USER_LOGOUT_SUCCESSFUL } from "../actionTypes/LoginActionTypes"

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
export function getLoginSuccessfulAction(payload) {
    return {
        type: USER_LOGIN_SUCCESSFUL,
        payload
    }
}

export function getLogoutSuccessfulAction() {
    return {
        type: USER_LOGOUT_SUCCESSFUL
    }
}

export function getLoginFailedAction(payload) {
    return {
        type: USER_LOGIN_FAILED,
        payload
    }
}

export function getLogoutFailedAction() {
    return {
        type: USER_LOGOUT_FAILED
    }
}


export function setLoginState(state){
    return {
        type : LOGIN_SET_LOGIN_STATE,
        payload : state
    }
}
