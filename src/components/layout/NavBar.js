import React from "react"
import { connect } from "react-redux";
import { LoginService } from "../../services/LoginServices/LoginService";

class NavBar extends React.Component{
    render(){
        return (<div>
            <div class="ui menu">
            <div class="header item">
            Online Sweet Mart App
             </div>
              <a class="active item">
                  Home
                </a>
                <a class="item">
                 Messages
                 </a>
                <a class="item">
                Friends
                </a>
                <div class="right menu">
                <div class="item" onClick = {this.props.onClickLogOut.bind(this,this.props.userId)}>
                    Logout
                    </div>
                    </div>
                    </div>
            </div>
        );
    }
}
const mapStateToProps = (state, props) => {
return {
    userId : state.login.userId
}
}

const mapDispatchToProps = (dispatch) => {
return {
    onClickLogOut : (userId,event) => {
        console.log("logout user id is :"+userId)
         const loginService = new LoginService();
         loginService.logout(userId,dispatch)
    }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);