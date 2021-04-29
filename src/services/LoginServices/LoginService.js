import { getLoginSuccessfulAction,getLoginFailedAction } from "../../actions/LoginActions";
import axios from "../../axios/axios";

const LOGIN_URL = "/login";

export class LoginService {
    
     login(userId,password,dispatch){
        axios.put(LOGIN_URL,{userId,password})
        .then(
            response => {
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
}