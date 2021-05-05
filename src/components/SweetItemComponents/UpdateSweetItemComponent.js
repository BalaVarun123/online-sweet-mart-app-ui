import React from "react";
export default class UpdateSweetItemComponent extends React.Component{

    orderItemIdRef = React.createRef();
    addProductIdRef = React.createRef();
    addSweetOrderIdRef = React.createRef();


    constructor(props){
        super(props);
        this.productIds = [];
        this.sweetOrderIds = [];
    }


    render(){

        let component;
        if (this.props.sweetItem == null)
        component = <p>{this.props.message}</p>
        else{
            this.renderProductIds();
            this.renderSweetOrderIds();
            component = (<div>
                <div>View SweetItem.Products</div>
                <div>View SweetItem.SweetOrders</div>
                <p>{this.props.message}</p>
                <form onSubmit = {this.onSubmit} onReset = {this.onReset}>
                <div>
                Order Item Id : <input type = "number" min = "0" value = {this.props.sweetItem.orderItemId} ref = {this.orderItemIdRef}/> <br/>
                {this.productIds}
                <br/>
                <input type = "number" min = "0" step = {1} ref = {this.addProductIdRef} placeholder = "Product ID"/><button type = "button" onClick = {this.onClickAddProductId}>Add Product</button>
                <br/>
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

    renderProductIds = () =>{
        
        this.productIds = [];
        for (let id of this.props.productIds){
            this.productIds.push(
            <div key = {id}>{id} <button type = "button" onClick = {this.onClickRemoveProductId.bind(this,id)}>Remove</button></div>  
            );
        }
        console.log("Product tags:"+(this.productIds));
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
        const product = Array.from(this.props.productIds);
        const sweetOrder = Array.from(this.props.sweetOrderIds);
        const sweetItem = {
            orderItemId : this.orderItemIdRef.current.value,
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

