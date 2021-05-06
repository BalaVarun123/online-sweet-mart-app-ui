import axios from "../../axios/axios";
import UserServices from "../UserServices/UserServices";
import { getLoginSuccessfulAction,getLoginFailedAction, getLogoutSuccessfulAction, getLogoutFailedAction } from "../../actions/LoginActions";


export class LoginService {
    LOGIN_URL = "/login";
    LOGOUT_URL = "/logout/"
    userServices = new UserServices();
    constructor(){
        this.login = this.login.bind(this);
        this.getUserDetails = this.getUserDetails.bind(this);
    }
     userDetails = null;
     async login(userId,password,dispatch){
        axios.put(this.LOGIN_URL,{userId,password})
        .then(
            response => {
                if (response.data== "Login successful.")
                 this.getUserDetails(userId,response.data,dispatch);
                 else 
                 dispatch(getLoginFailedAction(response.data))
            }
                
        )
        .catch(
            error => {
                console.log("Login error:"+error.response.data);
                dispatch(getLoginFailedAction(error.response.data));
            }
        );
    }



    async getUserDetails(userId,data,dispatch){
        
        console.log("Login response:"+ data);
         await this.userServices.getUser(userId,
            (response) => this.userDetails = response.data,
            (error) => this.userDetails = null
            )
       
        if (this.userDetails){
            localStorage.setItem("isLoggedIn","true");
            console.log("isLogged in is true");
            localStorage.setItem("userDetails",this.userDetails);
            dispatch(getLoginSuccessfulAction(data,this.userDetails));
           
            
        }
        else {
        dispatch(getLoginFailedAction("Cannot retrieve user details."))
        localStorage.setItem("isLoggedIn","false");
        }

    }

    logout(dispatch){
        if (localStorage.getItem("isLoggedIn") === "true"){
            const userId = Number(localStorage.getItem("userDetails").userId)
            if (Number(userId) == userId){
                axios.put(this.LOGOUT_URL+userId)
                .then((response) => alert(response))
                .catch((error) => alert(error.response.data))
                dispatch(getLogoutSuccessfulAction())
            }
            else {
                alert("Invalid login state. Please try again.")
                localStorage.setItem("isLoggedIn", "false")
                localStorage.setItem("userDetails",{})
                dispatch(getLogoutFailedAction())
            }
            
        }
        else {
            alert("Already logged out.")
        }

    }

}