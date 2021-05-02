import React from "react";
export default class UpdateOrderBillComponent extends React.Component{

    orderBillIdRef = React.createRef();
    createdDateRef = React.createRef();
    totalCostRef = React.createRef();

    render(){

        let component;
        if (this.props.orderBill == null)
        component = <p>{this.props.message}</p>
        else
        component = (<div>
            <div>View OrderBill.SwetOrders</div>
            <p>{this.props.message}</p>
            <form onSubmit = {this.onSubmit} onReset = {this.onReset}>
            <div>
            Order Bill Id : <input type = "number" min = "0" value = {this.props.orderBill.orderBillId} ref = {this.orderBillIdRef}/> <br/>
            Created date : <input type = "date" max = {new Date()} defaultValue = {this.props.orderBill.createdDate} ref = {this.createdDateRef}/> <br/>
            Total Cost : <input type = "number" min = "0.0" step = "0.01" defaultValue = {this.props.orderBill.totalCost} ref = {this.totalCostRef}/> <br/>
            <button type = "button">Edit Sweet orders</button>
            <button type="submit">Update</button>
            <button type="reset">Reset</button>
            </div>
            </form>
        </div>);
        return component;
    }


    onSubmit = (event) => {
        event.preventDefault();
        const orderBill = {
            orderBillId : this.orderBillIdRef.current.value,
            createdDate : this.createdDateRef.current.value,
            totalCost : this.totalCostRef.current.value,
            listSweetOrder : this.props.orderBill.listSweetOrder.map((sweetOrder) => sweetOrder.sweetOrderId)
        }
        this.props.onSubmit(orderBill);
    }

    onReset = (event) => {

    }

    onClickViewSweetOrders = () => {

    }
}

