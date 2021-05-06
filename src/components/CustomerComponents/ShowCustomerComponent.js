import React from "react";
export default class ShowCustomerComponent extends React.Component{
    render(){
        console.log("message is "+this.props.message)
        
        let component;
        if (this.props.Customer == null)
        component = <p>{this.props.message}</p>
        else 
        component = ( <div class="ui column stackable center page grid">
             <div class="three wide column"></div>
            <div className = "ui ten wide column big list segment">
            <div class="item">
            <i class="id badge icon"> </i>
            <label>User Id : </label>{this.props.customer.userId} 
            </div>
            <div class = "item">
            <i class="user plus icon"></i>
            <label>Username :</label> {this.props.Customer.username}
            </div>
            <button type = "button">View Sweet orders</button>
            <button type="button" onClick = {this.props.onClickUpdate}className="ui left floated button primary">Update</button>
            <button type="button" onClick = {this.onClickDelete}className="ui right floated button negative">Delete</button>
            <button type = "button">View Sweet items</button>
            <button type="button" onClick = {this.props.onClickUpdate}className="ui left floated button primary">Update</button>
            <button type="button" onClick = {this.onClickDelete}className="ui right floated button negative">Delete</button>
            <button type = "button">View cart</button>
            <button type="button" onClick = {this.props.onClickUpdate}className="ui left floated button primary">Update</button>
            <button type="button" onClick = {this.onClickDelete}className="ui right floated button negative">Delete</button>
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
