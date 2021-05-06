
  
import React from "react";
export default class UpdateSweetItemComponent extends React.Component{

    orderItemIdRef = React.createRef();
    addProductIdRef = React.createRef();
    addSweetOrderIdRef = React.createRef();


    constructor(props){
        super(props);
    }


    render(){

        let component;
        if (this.props.sweetItem == null)
        component = <p>{this.props.message}</p>
        else{
            component = (<div className="ui column stackable center page grid">
                <div class="three wide column"></div>
                <p>{this.props.message}</p>
                <form onSubmit = {this.onSubmit} onReset = {this.onReset} className = "ui ten wide column form segment">
                <div>
                <div className = "field"></div>
                <label>OrderItem Id </label> <input type = "number" min = "0" value = {this.props.sweetItem.orderItemId} ref = {this.orderItemIdRef}/> <br/>
                <div className = "field">
                 <br/>
                {this.productId}
                </div>
                <br/>
                <label>Product ID </label><input type = "number" min = "0" step = {1} ref = {this.addProductIdRef} placeholder = "Product ID"/>
                <br/>
                <div className = "field">
                {this.sweetOrderId}
                </div>
                <br/>
                <label>Sweet Order ID </label> <br/><input type = "number" min = "0" step = {1} ref = {this.addSweetOrderIdRef} placeholder = "Sweet Order ID"/>
                <br/>
                <button type="submit" className="ui left floated button primary">Update SweetItem </button>
                <br/>
                <button type="reset" className= "ui right floated button negative">Reset </button>
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
        const sweetItem = {
            orderItemId : this.orderItemIdRef.current.value,
            productId : this.addProductIdRef.current.value,
            sweetOrderId : this.addSweetOrderIdRef.current.value
        }
        this.props.onSubmit(sweetItem);
    }

   
    
}
