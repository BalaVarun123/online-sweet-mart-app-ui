import React from "react";
export default class AddSweetItemComponent extends React.Component{
    orderItemIdRef = React.createRef();
    addProductIdRef = React.createRef();
    addSweetOrderIdRef = React.createRef();
    constructor(props){
        super(props);
        this.productIds = [];
        this.sweetOrderIds = [];
    }
    render(){
        this.renderProductIds();
        this.renderSweetOrderIds();
        const date = new Date();
        let component = (<div>
            <div>View SweetItem.Products</div>
            <div>View SweetItem.SwetOrders</div>
            <p>{this.props.message}</p>
            <form onSubmit = {this.onSubmit} onReset = {this.onReset}>
            <div>
            Order Item Id : (will be auto generated.) <br/>
            Product ID's : <br/>
            {this.productIds}
            <br/> 
            <input type = "number" min = "0" step = {1} ref = {this.addProductIdRef} placeholder = "Product ID"/><button type = "button" onClick = {this.onClickAddProductId}>Add Product</button>
            <br/>
            Sweet Order ID's : <br/>
            {this.sweetOrderIds}
            <br/>
            <input type = "number" min = "0" step = {1} ref = {this.addSweetOrderIdRef} placeholder = "Sweet Order ID"/><button type = "button" onClick = {this.onClickAddSweetOrderId}>Add Sweet Order</button>
            <br/>
            <button type="submit">Add SweetItem</button>
            <br/>
            <button type="reset">Reset</button>
            </div>
            </form>
        </div>);

        return component;
    }

    renderProductIds = () =>{
        this.productIds = [];
        for (let id of this.props.productIds){
            this.productIds.push(
            <div key = {id}>{id} <button type = "button" onClick = {this.onClickRemoveProductId.bind(this,id)}>Remove</button></div>  
            );
        }
     }


    renderSweetOrderIds = () =>{
       this.sweetOrderIds = [];
       for (let id of this.props.sweetOrderIds){
           this.sweetOrderIds.push(
           <div key = {id}>{id} <button type = "button" onClick = {this.onClickRemoveSweetOrderId.bind(this,id)}>Remove</button></div>  
           );
       }
    }
    

onSubmit = (event) => {
    event.preventDefault();
    const product = Array.from(this.props.productIds);
    const sweetOrder = Array.from(this.props.sweetOrderIds);
    const sweetItem = {
        product : product,
        sweetOrder : sweetOrder 
    }
    this.props.onSubmit(sweetItem);
}

    onReset = (_event) => {
        this.props.onReset();
        this.forceUpdate();
    }

    onClickRemoveProductId = (id,_event) => {
        this.props.onClickRemoveProductId(id);
        this.forceUpdate();
    }

    onClickAddProductId = (_event) =>{
        if (this.addProductIdRef.current.value){
            this.props.onClickAddProductId(Number(this.addProductIdRef.current.value));
            this.forceUpdate();
        }
    }
    

    onClickRemoveSweetOrderId = (id,_event) => {
        this.props.onClickRemoveSweetOrderId(id);
        this.forceUpdate();
    }

    onClickAddSweetOrderId = (_event) =>{
        if (this.addSweetOrderIdRef.current.value){
            this.props.onClickAddSweetOrderId(Number(this.addSweetOrderIdRef.current.value));
            this.forceUpdate();
        }
        
    }
}
