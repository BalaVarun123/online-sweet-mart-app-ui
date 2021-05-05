import React from "react";
export default class UpdateOrderBillComponent extends React.Component{

    orderBillIdRef = React.createRef();
    createdDateRef = React.createRef();
    totalCostRef = React.createRef();
    addSweetOrderIdRef = React.createRef();


    constructor(props){
        super(props);
        this.sweetOrderIds = [];
    }


    render(){

        let component;
        if (this.props.orderBill == null)
        component = <p>{this.props.message}</p>
        else{
            this.renderSweetOrderIds();
            component = (<div>
                <div>View OrderBill.SweetOrders</div>
                <p>{this.props.message}</p>
                <form onSubmit = {this.onSubmit} onReset = {this.onReset}>
                <div>
                Order Bill Id : <input type = "number" min = "0" value = {this.props.orderBill.orderBillId} ref = {this.orderBillIdRef}/> <br/>
                Created date : <input type = "date" max = {new Date()} defaultValue = {this.props.orderBill.createdDate} ref = {this.createdDateRef}/> <br/>
                Total Cost : <input type = "number" min = "0.0" step = "0.01" defaultValue = {this.props.orderBill.totalCost} ref = {this.totalCostRef}/> <br/>
                {this.sweetOrderIds}
                <br/>
                <input type = "number" min = "0" step = {1} ref = {this.addSweetOrderIdRef} placeholder = "Sweet Order ID"/><button type = "button" onClick = {this.onClickAddSweetOrderId}>Add Sweet Order</button>
                <br/>
                <button type="submit">Update</button>
                <br/>
                <button type="reset">Reset</button>
                </div>
                </form>
            </div>);
        }
        
        return component;
    }


    renderSweetOrderIds = () =>{
        
       this.sweetOrderIds = [];
       for (let id of this.props.sweetOrderIds){
           this.sweetOrderIds.push(
           <div key = {id}>{id} <button type = "button" onClick = {this.onClickRemoveSweetOrderId.bind(this,id)}>Remove</button></div>  
           );
       }
       console.log("Sweet Order Id tags:"+(this.sweetOrderIds));
    }

    onSubmit = (event) => {
        event.preventDefault();
        const listSweetOrder = Array.from(this.props.sweetOrderIds);
        const orderBill = {
            orderBillId : this.orderBillIdRef.current.value,
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

