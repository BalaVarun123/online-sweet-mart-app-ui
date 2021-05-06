import React from "react";
import { connect } from "react-redux";
import {getLoginAction} from "../../actions/LoginActions"
import { LoginService } from "../../services/LoginServices/LoginService";
import LoginForm from "./LoginForm";


var loginService = new LoginService();

class LoginContainer extends React.Component{
    
    render(){
        return <React.Fragment>
            <LoginForm message = {this.props.message} onSubmit = {this.props.onSubmit}/>
        </React.Fragment>
    }
}


const mapStateToProps = (state,props) => {
    console.log("message is "+state.login.message);
    return {
      message : state.login.message,
      isLoggedIn : state.login.isLoggedIn
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (userId,password) => {
            console.log("clicked");
            dispatch(getLoginAction(userId,password));
            loginService.login(userId,password,dispatch);
        }
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)
  