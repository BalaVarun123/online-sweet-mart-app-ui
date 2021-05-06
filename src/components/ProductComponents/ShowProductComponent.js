import React from "react";
export default class ShowProductComponent extends React.Component{
    render(){
        console.log("message is "+this.props.message)
        
        let component;
        if (this.props.product == null)
        component = <p>{this.props.message}</p>
        else 
        component = ( <div class="ui column stackable center page grid">
             <div class="three wide column"></div>
            
            <div className = "ui ten wide column big list segment">
            <div class="item">
            Product Id : {this.props.product.productId} <br/>
            </div>
            <div class="item">
            Name : {this.props.product.name} <br/>
            </div>
            <div class="item">
            price : {this.props.product.price} <br/>
            </div>
            <div class="item">Available : true</div>
            <div class="item">
            Description : {this.props.product.description} <br/>
            </div><br/>
            <button type="button" onClick = {this.props.onClickUpdate} className="ui left floated button primary">Update</button>
            <button type="button" onClick = {this.onClickDelete} className="ui right floated button negative">Delete</button>
            </div>
        </div>);
        return component;
    }


    onClickViewProducts = () => {

    }

    

    onClickDelete = (event) => {
        this.props.onClickDelete(this.props.product.productId);
    }
}
