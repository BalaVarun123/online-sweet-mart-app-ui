import React from "react";
export default class UpdateAdminComponent extends React.Component{


    idRef = React.createRef();
    customerIdRef = React.createRef();
    userIdRef = React.createRef();
    itemIdRef = React.createRef();
    categoryIdRef = React.createRef();
    cartIdRef = React.createRef();
    productIdRef = React.createRef();


    render(){
        let component;
        if (this.props.admin){
            component = ( 
                    <div class="ui column stackable center page grid">
                        <div class="three wide column"></div>
                       
                        <form onSubmit = {this.onSubmit}  className = "ui ten wide column form segment">
                            <div className = "field">
                            <label>ID</label>  <input id = "id-input" type = "number" min = "0" defaultValue = {this.props.admin.id}  ref = {this.idRef}/>   <br/>
                            </div>
                            <div className = "field">
                            <label>Customer ID </label> <input id = "customer-id-input"type = "number" min = "0" defaultValue = {this.props.admin.customer.userId} ref = {this.customerIdRef} />   <br/>
                            </div>
                            <div className = "field">
                            <label>User ID</label> <input id = "user-id-input" type = "number" min = "0" defaultValue = {this.props.admin.user.userId} ref = {this.userIdRef}/>   <br/>
                            </div>
                            <div className = "field">
                            <label>SweetItem ID</label>  <input id = "sweet-item-id-input" type = "number" min = "0" defaultValue = {this.props.admin.item.orderItemId} ref = {this.itemIdRef}/>   <br/>
                            </div>
                            <div className = "field">
                            <label>Category Id</label>  <input id = "category-id-input" type = "number" min = "0" defaultValue = {this.props.admin.category.categoryId} ref = {this.categoryIdRef}/>    <br/>
                            </div>
                            <div className = "field">
                            <label>Cart ID</label>  <input id = "cart-id-input" type = "number" min = "0" defaultValue = {this.props.admin.cart.cartId}  ref = {this.cartIdRef}/>  <br/>
                            </div>
                            <div className = "field">
                            <label>Product ID</label>  <input id = "product-id-input" type = "number" min = "0" defaultValue = {this.props.admin.product.productId} ref = {this.productIdRef}/>   <br/>
                            </div>
                            <button type="submit" className="ui left floated button primary">Update</button>
                            <button type= "reset" className="ui right floated button negative">Reset</button>
                            {/*<button type="button">Cancel</button>*/}
                            <p>{this.props.message}</p>
                        </form>
                        
                    </div>);
            }
        else{
            component = ( <h2>{this.props.message}</h2> );
        }

        return component;
    }

    onSubmit = (event) => {
        event.preventDefault();
        const admin = {     
            id : this.idRef.current.value,
            customerId : this.customerIdRef.current.value,
            userId : this.userIdRef.current.value,
            itemId : this.itemIdRef.current.value,
            category : this.categoryIdRef.current.value,
            cart : this.cartIdRef.current.value,
            product : this.productIdRef.current.value
        }
        this.props.onSubmit(admin);
    }
}

