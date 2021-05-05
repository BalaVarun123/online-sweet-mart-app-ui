import React from "react";
export default class AddOrderBillComponent extends React.Component{
    orderBillIdRef = React.createRef();
    createdDateRef = React.createRef();
    totalCostRef = React.createRef();
    addSweetOrderIdRef = React.createRef();
    constructor(props){
        super(props);
        this.sweetOrderIds = [];
    }
    render(){
        this.renderSweetOrderIds();
        const date = new Date();
        let component = (<div>
            <div>View OrderBill.SweetOrders</div>
            <p>{this.props.message}</p>
            <form onSubmit = {this.onSubmit} onReset = {this.onReset}>
            <div>
            Order Bill Id : (will be auto generated.) <br/>
            Created date : <input type = "date" max = {date} defaultValue = {date} ref = {this.createdDateRef}/> <br/>
            Total Cost : <input type = "number" min = "0.0" step = "0.01"  ref = {this.totalCostRef}/> <br/>
            Sweet Order ID's : <br/>
            {this.sweetOrderIds}
            <br/>
            <input type = "number" min = "0" step = {1} ref = {this.addSweetOrderIdRef} placeholder = "Sweet Order ID"/><button type = "button" onClick = {this.onClickAddSweetOrderId}>Add Sweet Order</button>
            <br/>
            <button type="submit">Add Order Bill</button>
            <br/>
            <button type="reset">Reset</button>
            </div>
            </form>
        </div>);

        return component;
    }


    renderSweetOrderIds = () =>{
        /*this.sweetOrderIds = this.props.sweetOrderList.map(
            (sweetOrder,index) => <div key = {sweetOrder.sweetOrderId}>{sweetOrder.sweetOrderId} <button type = "button" onClick = {this.onClickRemoveSweetOrderId.bind(this,index)}>Remove</button></div>
            );
        */
       this.sweetOrderIds = [];
       for (let id of this.props.sweetOrderIds){
           this.sweetOrderIds.push(
           <div key = {id}>{id} <button type = "button" onClick = {this.onClickRemoveSweetOrderId.bind(this,id)}>Remove</button></div>  
           );
       }
    }

    onSubmit = (event) => {
        event.preventDefault();
        const listSweetOrder = Array.from(this.props.sweetOrderIds);
        const orderBill = {
            createdDate : this.createdDateRef.current.value,
            totalCost : this.totalCostRef.current.value,
            listSweetOrder : listSweetOrder 
        }
        this.props.onSubmit(orderBill);
    }

    onReset = (event) => {
        this.props.onReset();
        this.forceUpdate();
    }

    onClickRemoveSweetOrderId = (id,event) => {
        this.props.onClickRemoveSweetOrderId(id);
        this.forceUpdate();
    }

    onClickAddSweetOrderId = (event) =>{
        if (this.addSweetOrderIdRef.current.value){
            this.props.onClickAddSweetOrderId(Number(this.addSweetOrderIdRef.current.value));
            this.forceUpdate();
        }
        
    }
}

