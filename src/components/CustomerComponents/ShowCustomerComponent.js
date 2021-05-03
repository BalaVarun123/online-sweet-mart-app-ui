import React from "react";
export default class ShowCustomerComponent extends React.Component{
    render(){
        console.log("message is "+this.props.message)
        
        let component;
        if (this.props.Customer == null)
        component = <p>{this.props.message}</p>
        else 
        component = ( <div>
            <div>Show customers</div>
            <div>
            UserId Id : {this.props.Customer.userId} <br/>
            Username : {this.props.Customer.username} <br/>
            <button type = "button">View Sweet orders</button>
            <button type="button" onClick = {this.props.onClickUpdate}>Update</button>
            <button type="button" onClick = {this.onClickDelete}>Delete</button>
            <button type = "button">View Sweet items</button>
            <button type="button" onClick = {this.props.onClickUpdate}>Update</button>
            <button type="button" onClick = {this.onClickDelete}>Delete</button>
            <button type = "button">View cart</button>
            <button type="button" onClick = {this.props.onClickUpdate}>Update</button>
            <button type="button" onClick = {this.onClickDelete}>Delete</button>
            </div>
        </div>);
        return component;
    }


    onClickViewSweetOrders = () => {

    }
    onClickViewSweetItems = () => {

    }
    onClickViewCart = () => {

    }

    

    onClickDelete = (event) => {
        this.props.onClickDelete(this.props.Customer.UserId);
    }
}
