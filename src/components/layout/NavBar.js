import React from "react"
import { connect } from "react-redux";
import { LoginService } from "../../services/LoginServices/LoginService";

class NavBar extends React.Component{
    render(){
        return (<div>  <br />
            <div class="ui menu">
            <a class="header item" href = "/">
            Online Sweet Mart App
             </a>
              <a class="active item" href = "/admin">
                  Administration
                </a>
                <div className="ui simple dropdown item">
                 Customer Management
                 <i className="dropdown icon"></i>
                 <div className="menu">
                    <a className="item" href = "/customer">Customer</a>
                    <a className="item" href = "/cart/show-all-carts" >Cart</a>
                    </div>
                 </div>
                <div className="ui simple dropdown item">
                Product Management
                <i className="dropdown icon"></i>
                <div className="menu">
                    <a className="item" href="http://localhost:3000/product/show-all">Product</a>
                    <a className="item">Category</a>
                    </div>
                 </div>
                
                <div className="ui simple dropdown item">
                Order Management
                <i className="dropdown icon"></i>
                <div className="menu">
                    <a className="item">Sweet Item</a>
                    <a className="item" href = "/order-bill/">Order Bill</a>
                </div>
                </div>
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
