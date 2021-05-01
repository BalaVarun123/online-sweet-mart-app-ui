import React from "react";
export default class ShowOrderBillComponent extends React.Component{
    render(){
        return <div>
            <div>Show orders</div>
            <div>
            Order Bill Id : {this.props.orderBill.orderBillId} <br/>
            Created date : {this.props.orderBill.createdDate} <br/>
            Total Cost : {this.props.orderBill.totalCost} <br/>
            <button type = "button">View Sweet orders</button>
            <button type="button">Update</button>
            <button type="button">Delete</button>
            </div>
        </div>
    }


    onClickViewSweetOrders = () => {

    }

    onClickUpdate = (event) => {

    }

    onClickDelete = (event) => {

    }
}
