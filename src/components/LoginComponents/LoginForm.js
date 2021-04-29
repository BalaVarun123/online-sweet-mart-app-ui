import React from "react";

export default class LoginForm extends React.Component{
    render(){
        return <form onSubmit = {this.onSubmit}>
            <input type="text"/>
            <input type="password"/>
        </form>
    }

    onSubmit = () => {
        this.props.onSubmit()
    }
}
//this is a login form