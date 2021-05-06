import { getLoginSuccessfulAction,getLoginFailedAction, getLogoutSuccessfulAction, getLogoutFailedAction } from "../../actions/LoginActions";
import axios from "../../axios/axios";

const LOGIN_URL = "/login";
const LOGOUT_URL = "/logout/"
export class LoginService {
    
     login(userId,password,dispatch){
        axios.put(LOGIN_URL,{userId,password})
        .then(
            response => {
                console.log("String(response) = "+(response.data  == "Login successful."))
                if (response.data  == "Login successful.")
                localStorage.setItem("isLoggedIn", "true");
                console.log("Login response:"+ response.data);
                dispatch(getLoginSuccessfulAction(response.data));
                }
        )
        .catch(
            error => {
                console.log("Login error:"+error.response.data);
                dispatch(getLoginFailedAction(error.response.data));
            }
        );
    }
    logout(userId,dispatch){
        axios.put(LOGOUT_URL + userId)
        .then(response => {
            if (response.data  == "Logout successful."){
                localStorage.setItem("isLoggedIn", "false");
                dispatch(getLogoutSuccessfulAction())
            }
            else {
                dispatch( getLogoutFailedAction())
            }
                
        })
        .catch((error) => {
            dispatch( getLogoutFailedAction())
        })
    }
}