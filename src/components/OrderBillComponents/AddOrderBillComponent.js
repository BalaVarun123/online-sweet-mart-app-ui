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
        let component = (<div class="ui column stackable center page grid">
            <div class="three wide column"></div>
            
            <form onSubmit = {this.onSubmit} onReset = {this.onReset} className = "ui ten wide column form segment">
            <div>
            Order Bill Id : (will be auto generated.) <br/>
            <div className = "field">
            <label>Created date </label><input type = "date" max = {date} defaultValue = {date} ref = {this.createdDateRef}/> <br/>
            </div>
            <div className = "field">
            <label>Total Cost </label> <input type = "number" min = "0.0" step = "0.01"  ref = {this.totalCostRef}/> <br/>
            </div>
            <div className = "field">
            <label>Sweet Order ID's </label> <br/>
            {this.sweetOrderIds}
            </div>
            <div className = "field">
            <input type = "number" min = "0" step = {1} ref = {this.addSweetOrderIdRef} placeholder = "Add Sweet Order ID"/>
            <button type = "button" className="ui left floated button secondary" onClick = {this.onClickAddSweetOrderId}>Add Sweet Order</button>
            </div>
            <br/><br/>
            <div className = "field">
            <button type="submit" className="ui left floated button primary">Add Order Bill</button>
            <button type="reset" className="ui right floated button negative">Reset</button>
            </div>
            </div>
            <p>{this.props.message}</p>
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
           <div key = {id}  className = "inline field">
               <label>{id} </label>
               <button type = "button" onClick = {this.onClickRemoveSweetOrderId.bind(this,id)} className="ui tiny button negative">Remove</button>
            </div>  
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

