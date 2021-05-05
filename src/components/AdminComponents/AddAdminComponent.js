import React from "react";
export default class AddAdminComponent extends React.Component{
    customerIdRef = React.createRef();
    userIdRef = React.createRef();
    itemIdRef = React.createRef();
    categoryIdRef = React.createRef();
    cartIdRef = React.createRef();
    productIdRef = React.createRef();


    render(){
        return <div className="ui column stackable center page grid">
                <div className="three wide column"></div>
               <form onSubmit = {this.onSubmit} onReset = {this.onReset} className = "ui ten wide column form segment">
                ID will be auto-generated.<br/>
                <div className = "field">
                <label>Customer ID</label>
                <input id = "customer-id-input"type = "number" min = "0"  ref = {this.customerIdRef} required/>   <br/>
                </div>
                <div className = "field">
                <label>User ID</label><input id = "user-id-input" type = "number" min = "0"  ref = {this.userIdRef} required/>   <br/>
                </div>
                <div className = "field">
                <label>SweetItem ID</label>  <input id = "sweet-item-id-input" type = "number" min = "0"  ref = {this.itemIdRef} required/>   <br/>
                </div>
                <div className = "field">
                <label>Category Id</label>  <input id = "category-id-input" type = "number" min = "0"  ref = {this.categoryIdRef} required/>    <br/>
                </div>
                <div className = "field">
                <label>Cart ID</label>  <input id = "cart-id-input" type = "number" min = "0"   ref = {this.cartIdRef} required/>  <br/>
                </div>
                <div className = "field">
                <label>Product ID</label>  <input id = "product-id-input" type = "number" min = "0" ref = {this.productIdRef} required/>   <br/>
                </div>
                <button type="submit" className="ui left floated button primary">Add</button>
                <button type= "reset" className="ui right floated button negative">Reset</button>
                {/*<button type="button">Cancel</button>*/}
                <p>{this.props.message}</p>
                </form>
        </div>
    }

    onSubmit = (event) => {
        event.preventDefault();
        const admin = {     
            id : 0,
            customerId : this.customerIdRef.current.value,
            userId : this.userIdRef.current.value,
            itemId : this.itemIdRef.current.value,
            category : this.categoryIdRef.current.value,
            cart : this.cartIdRef.current.value,
            product : this.productIdRef.current.value
        }
        this.props.onSubmit(admin);
    }

    onReset = (event) => {

    }
}

