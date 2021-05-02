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
                Customer ID : <input id = "customer-id-input"type = "number" min = "0"  ref = {this.customerIdRef} required/>   <br/>
                User ID: <input id = "user-id-input" type = "number" min = "0"  ref = {this.userIdRef} required/>   <br/>
                SweetItem ID : <input id = "sweet-item-id-input" type = "number" min = "0"  ref = {this.itemIdRef} required/>   <br/>
                Category Id : <input id = "category-id-input" type = "number" min = "0"  ref = {this.categoryIdRef} required/>    <br/>
                Cart ID : <input id = "cart-id-input" type = "number" min = "0"   ref = {this.cartIdRef} required/>  <br/>
                Product ID : <input id = "product-id-input" type = "number" min = "0" ref = {this.productIdRef} required/>   <br/>
                <button type="submit">Add</button>
                <button type= "reset">Reset</button>
                {/*<button type="button">Cancel</button>*/}
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

