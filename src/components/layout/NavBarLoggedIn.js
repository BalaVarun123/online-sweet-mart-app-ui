import { render } from "@testing-library/react"
import React from "react"
import { connect } from "react-redux";
import { LoginService } from "../../services/LoginServices/LoginService";

class NavBarComponentLoggedIn extends React.Component{
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
                <div class="item" onClick = {this.props.onClickLogOut()}>
                    Logout
                    </div>
                    </div>
                    </div>
            </div>
        );
    }
}
const mapStateToProps = (state, props) => {
return {}
}

const mapDispatchToProps = (dispatch) => {
return {
    onClickLogOut : () => {
        const loginService = new LoginService();
        loginService.logout(dispatch)
    }
}
}

export default connect(mapStateToProps,mapDispatchToProps)(NavBarComponentLoggedIn);


/*
<div class="ui pointing menu">
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
                <div class="item">
                <div class="ui transparent icon input">
                    <input type="text" placeholder="Search..."/>
                    <i class="search link icon"></i>
                        </div>
                    </div>
                    </div>
                    </div> */