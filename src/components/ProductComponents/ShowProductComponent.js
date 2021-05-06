import React from "react";
export default class ShowProductComponent extends React.Component{
    render(){
        console.log("message is "+this.props.message)
        
        let component;
        if (this.props.product == null)
        component = <p>{this.props.message}</p>
        else 
        component = ( <div>
            <div>Show products</div>
            <div>
            Product Id : {this.props.product.productId} <br/>
            Name : {this.props.product.name} <br/>
            price : {this.props.product.price} <br/>
            <button type="button" onClick = {this.props.onClickUpdate}>Update</button>
            <button type="button" onClick = {this.onClickDelete}>Delete</button>
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
