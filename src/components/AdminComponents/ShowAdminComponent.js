import React from "react";
export default class ShowAdminComponent extends React.Component{
    render(){
        let component;
        if (this.props.admin){
            component  = 
            <div>
            
                <div className = "ui big list">
                <div class="item">
                <label>ID : </label> {this.props.admin.id}
                </div>
                <div class="item">
                <label>Customer ID :</label> {this.props.admin.customer.userId} 
                </div>
                <div class="item">
                <label>User ID:</label> {this.props.admin.user.userId}
                </div>
                <div class="item">
                <label>SweetItem ID :</label> {this.props.admin.item.orderItemId} 
                </div>
                <div class="item">
                <label>Category Id : </label>{this.props.admin.category.categoryId}
                </div>
                <div class="item">
                <label>Cart ID : </label>{this.props.admin.cart.cartId} 
                </div>
                <div class="item">
                <label>Product ID :</label> {this.props.admin.product.productId} <br/>
                </div>
                </div>
                <button type="button" id = "btn-update" onClick = {this.props.onClickUpdate}>Update</button>
                <button type="button" id = "btn-delete" onClick = {this.props.onClickDelete}>Delete</button>
                {/*<button type="button">Cancel</button>*/}
            <br/>
        </div>
    }
    else{
        component = <p>{this.props.message}</p>
    }
        return component;
    }

}
