import React from "react";
export default class ShowSweetItemComponent extends React.Component{
    render(){
        console.log("message is "+this.props.message)
        
        let component;
        if (this.props.sweetItem == null)
        component = <p>{this.props.message}</p>
        else 
        component = ( <div>
            <div>Show sweetItems</div>
            <div>
            Order Item Id : {this.props.sweetItem.orderItemId} <br/>
            <button type = "button">View Products</button>
            <button type = "button">View Sweet orders</button>
            <button type="button" onClick = {this.props.onClickUpdate}>Update</button>
            <button type="button" onClick = {this.onClickDelete}>Delete</button>
            </div>
        </div>);
        return component;
    }

    onClickViewProducts = () => {

    }


    onClickViewSweetOrders = () => {

    }

    

    onClickDelete = (event) => {
        this.props.onClickDelete(this.props.orderBill.orderBillId);
    }
}
