import React from "react";

export default class LoginForm extends React.Component{
    userIdRef = React.createRef();
    passwordRef = React.createRef();
    render(){
        return <form onSubmit = {this.onSubmit}>
            <input type="text" ref = {this.userIdRef}/><br/>
            <input type="password" ref = {this.passwordRef}/>
            <button type="submit">Login</button>
            <p>{this.props.message}</p>
        </form>
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.userIdRef.current.value,this.passwordRef.current.value);
    }
}