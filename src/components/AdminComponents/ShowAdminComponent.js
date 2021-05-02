import React from "react";
export default class ShowAdminComponent extends React.Component{
    render(){
        let component;
        if (this.props.admin){
            component  = 
            <div>
            <p>
                ID : {this.props.admin.id} <br/>
                Customer ID : {this.props.admin.customer.userId} <br/>
                User ID: {this.props.admin.user.userId} <br/>
                SweetItem ID : {this.props.admin.item.orderItemId} <br/>
                Category Id : {this.props.admin.category.categoryId} <br/>
                Cart ID : {this.props.admin.cart.cartId} <br/>
                Product ID : {this.props.admin.product.productId} <br/>
                <button type="button" id = "btn-update" onClick = {this.props.onClickUpdate}>Update</button>
                <button type="button" id = "btn-delete" onClick = {this.props.onClickDelete}>Delete</button>
                {/*<button type="button">Cancel</button>*/}
            </p>
            <br/>
        </div>
    }
    else{
        component = <p>{this.props.message}</p>
    }
        return component;
    }

}
