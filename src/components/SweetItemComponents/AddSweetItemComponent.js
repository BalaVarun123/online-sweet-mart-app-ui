
  
import React from "react";
export default class AddSweetItemComponent extends React.Component{
    orderItemIdRef = React.createRef();
    addProductIdRef = React.createRef();
    addSweetOrderIdRef = React.createRef();
    constructor(props){
        super(props);
    }
    render(){
        
        let component = (<div class="ui column stackable center page grid">
        <div class="three wide column"></div>
            
            <form onSubmit = {this.onSubmit} className = "ui ten wide column form segment" >
            <div>
            Order Item Id : (will be auto generated.) <br/>
            <div className = "field"></div> 
            <label>Product Id </label><input type = "number" min = "0" step = {1} ref = {this.addProductIdRef} placeholder = "Product ID"/>
            <br/>
            <div className = "field"></div> 
            <label>SweetOrder Id </label><input type = "number" min = "0" step = {1} ref = {this.addSweetOrderIdRef} placeholder = "Sweet Order ID"/>
            <br/>
            <div className = "field"></div>
            <button type="submit" className="ui left floated button primary">Add SweetItem</button>
            <br/>
            <button type="reset" className="ui right floated button negative">Reset</button>
            </div>
            <p>{this.props.message}</p>
            </form>
        </div>);

        return component;
    }

    
    

onSubmit = (event) => {
    event.preventDefault();
   
    const sweetItem = {
        productId : this.addProductIdRef.current.value,
        sweetOrderId : this.addSweetOrderIdRef.current.value
    }
    this.props.onSubmit(sweetItem);
}

    

    

   
        
    
}
