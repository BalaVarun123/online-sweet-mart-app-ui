
  
import React from "react";
export default class ShowSweetItemComponent extends React.Component{
    render(){
        console.log("message is "+this.props.message)
        
        let component;
        if (this.props.sweetItem == null)
        component = <p>{this.props.message}</p>
        else 
        component = ( <div class="ui column stackable center page grid">
             <div class="three wide column"></div>
             <div className = "ui ten wide column big list segment">
            <div>
            <div class="item">
            <label>Order Item Id : </label>{this.props.sweetItem.orderItemId} <br/>
            </div>
            <div class="item">
            <label>Product ID : </label> <a>{this.props.sweetItem.product.productId}</a>
            </div>
            <div class="item"></div>
            <label>SweetOrder Id : </label> : <a>{this.props.sweetItem.sweetOrder.sweetOrderId}</a>
            </div>
            <button type="button"  onClick = {this.props.onClickUpdate} className="ui left floated button primary">Update</button>
            <button type="button"  onClick = {this.onClickDelete} className="ui right floated button negative">Delete</button>
            </div>
            
        </div>);
        return component;
    }

    
    

    onClickDelete = (_event) => {
        this.props.onClickDelete(this.props.sweetItem.orderItemId);
    }
    
}
