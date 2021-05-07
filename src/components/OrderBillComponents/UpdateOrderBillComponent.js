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
        component = <h2>{this.props.message}</h2>
        else{
            this.renderSweetOrderIds();
            component = (<div  className="ui column stackable center page grid">
                <div className="three wide column"></div>
                <form onSubmit = {this.onSubmit} onReset = {this.onReset} className = "ui ten wide column form segment">
                <div>
                <div className = "field">
                <label>Order Bill Id </label> <input type = "number" min = "0" value = {this.props.orderBill.orderBillId} ref = {this.orderBillIdRef}/> <br/>
                </div>
                <div className = "field">
                <label>Created date </label> <input type = "date" max = {new Date()} defaultValue = {this.props.orderBill.createdDate} ref = {this.createdDateRef}/> <br/>
                </div>
                <div className = "field">
                <label>Total Cost </label> <input type = "number" min = "0.0" step = "0.01" defaultValue = {this.props.orderBill.totalCost} ref = {this.totalCostRef}/> <br/>
                </div>
                <div className = "field">
                <label>Sweet Order ID's </label> <br/>
                {this.sweetOrderIds}
                </div>
                <br/>
                <div className = "field">
                <input type = "number" min = "0" step = {1} ref = {this.addSweetOrderIdRef} placeholder = "Sweet Order ID"/>
                <button type = "button" onClick = {this.onClickAddSweetOrderId} className="ui left floated button secondary" >Add Sweet Order</button>
                </div>
                <br/><br/>
                <div className = "field">
                <button type="submit" className="ui left floated button primary">Update</button>
                <button type="reset"  className="ui right floated button negative">Reset</button>
                </div>
                </div>
                <p>{this.props.message}</p>
                </form>
            </div>);
        }
        
        return component;
    }


    renderSweetOrderIds = () =>{
        
       this.sweetOrderIds = [];
       for (let id of this.props.sweetOrderIds){
           this.sweetOrderIds.push(
           <div key = {id} className = "inline field">
               
               <label>{id}</label> 
               <button type = "button" onClick = {this.onClickRemoveSweetOrderId.bind(this,id)} className="ui tiny button negative">Remove</button>
            </div>  
           );
       }

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

