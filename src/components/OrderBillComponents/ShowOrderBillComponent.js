import React from "react";
export default class ShowOrderBillComponent extends React.Component{
    render(){
        console.log("message is "+this.props.message)
        
        let component;
        if (this.props.orderBill == null)
        component = <p>{this.props.message}</p>
        else 
        component = ( <div>
            <div>Show orders</div>
            <div>
            Order Bill Id : {this.props.orderBill.orderBillId} <br/>
            Created date : {this.props.orderBill.createdDate} <br/>
            Total Cost : {this.props.orderBill.totalCost} <br/>
            <button type = "button">View Sweet orders</button>
            <button type="button" onClick = {this.props.onClickUpdate}>Update</button>
            <button type="button" onClick = {this.onClickDelete}>Delete</button>
            </div>
        </div>);
        return component;
    }


    onClickViewSweetOrders = () => {

    }

    

    onClickDelete = (event) => {
        this.props.onClickDelete(this.props.orderBill.orderBillId);
    }
}
