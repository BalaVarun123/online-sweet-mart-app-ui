import React from "react";
export default class AddAdminComponent extends React.Component{
    customerIdRef = React.createRef();
    userIdRef = React.createRef();
    itemIdRef = React.createRef();
    categoryIdRef = React.createRef();
    cartIdRef = React.createRef();
    productIdRef = React.createRef();


    render(){
        return <div>
               <form onSubmit = {this.onSubmit} onReset = {this.onReset}>
                ID : will be auto-generated.<br/>
                Customer ID : <input id = "customer-id-input"type = "number" min = "0" defaultValue = {this.props.admin.customer.userId} ref = {this.customerIdRef} />   <br/>
                User ID: <input id = "user-id-input" type = "number" min = "0" defaultValue = {this.props.admin.user.userId} ref = {this.userIdRef}/>   <br/>
                SweetItem ID : <input id = "sweet-item-id-input" type = "number" min = "0" defaultValue = {this.props.admin.item.orderItemId} ref = {this.itemIdRef}/>   <br/>
                Category Id : <input id = "category-id-input" type = "number" min = "0" defaultValue = {this.props.admin.category.categoryId} ref = {this.categoryIdRef}/>    <br/>
                Cart ID : <input id = "cart-id-input" type = "number" min = "0" defaultValue = {this.props.admin.cart.cartId}  ref = {this.cartIdRef}/>  <br/>
                Product ID : <input id = "product-id-input" type = "number" min = "0" defaultValue = {this.props.admin.product.productId} ref = {this.productIdRef}/>   <br/>
                <button type="submit">Add</button>
                <button type= "reset">Reset</button>
                {/*<button type="button">Cancel</button>*/}
                </form>
        </div>
    }

    onSubmit = (event) => {

    }

    onReset = (event) => {

    }
}

