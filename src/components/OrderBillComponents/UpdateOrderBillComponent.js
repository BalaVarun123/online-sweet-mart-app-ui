import React from "react";
export default class UpdateOrderBillComponent extends React.Component{

    orderBillIdRef = React.createRef();
    createdDateRef = React.createRef();
    totalCostRef = React.createRef();

    render(){
        return <div>
            <div>View OrderBill.SwetOrders</div>
            <form onSubmit = {this.onSubmit} onReset = {this.onReset}>
            <div>
            Order Bill Id : <input type = "number" min = "0" value = {this.props.orderBill.orderBillId} ref = {this.orderBillIdRef}/> <br/>
            Created date : <input type = "date" max = {new Date()} defaultValue = {this.props.orderBill.createdDate} ref = {this.createdDateRef}/> <br/>
            Total Cost : <input type = "number" min = "0.0" step = "0.01" defaultValue = {this.props.orderBill.totalCost} ref = {this.totalCostRef}/> <br/>
            <button type = "button">View Sweet orders</button>
            <button type="button">Update</button>
            <button type="button">Delete</button>
            </div>
            </form>
        </div>
    }


    onSubmit = (event) => {

    }

    onReset = (event) => {

    }

    onClickViewSweetOrders = () => {

    }
}

