import React from "react";
export default class UpdateCustomerComponent extends React.Component{

    UserIdRef = React.createRef();
    UsernameRef = React.createRef();
    addSweetOrderIdRef = React.createRef();
    addSweetItemIdRef = React.createRef();
    addCartIdRef = React.createRef();


    constructor(props){
        super(props);
        this.sweetOrderIds = [];
        this.sweetItemIds = [];
        this.cartIds = [];
    }


    render(){

        let component;
        if (this.props.Customer == null)
        component = <p>{this.props.message}</p>
        else{
            this.renderSweetOrderIds();
            this.renderSweetItemIds();
            this.renderCartIds();
            component = (<div>
                <div>View Customer.SweetOrders</div>
                <p>{this.props.message}</p>
                <form onSubmit = {this.onSubmit} onReset = {this.onReset}>
                <div>
                User Id : <input type = "number" min = "0" value = {this.props.Customer.UserId} ref = {this.userIdRef}/> <br/>
                Username : <input type = "string" min = "3" Value = {this.props.Customer.Username} ref = {this.usernameRef}/> <br/>
                {this.sweetOrderIds}
                <br/>
                <input type = "number" min = "0" step = {1} ref = {this.addSweetOrderIdRef} placeholder = "Sweet Order ID"/><button type = "button" onClick = {this.onClickAddSweetOrderId}>Add Sweet Order</button>
                <br/>
                <button type="submit">Add Customer</button>
                <br/>
                <button type="reset">Reset</button>
                <br/>
                </div>
                </form>   
            </div>);
            component = (<div>
                <div>View Customer.SweetItems</div>
                <p>{this.props.message}</p>
                <form onSubmit = {this.onSubmit} onReset = {this.onReset}>
                <div>
                User Id : <input type = "number" min = "0" value = {this.props.Customer.UserId} ref = {this.userIdRef}/> <br/>
                Username : <input type = "string" min = "3" Value = {this.props.Customer.Username} ref = {this.usernameRef}/> <br/>
                {this.sweetItemIds}
                <br/>
                <input type = "number" min = "0" step = {1} ref = {this.addSweetItemIdRef} placeholder = "Sweet Item ID"/><button type = "button" onClick = {this.onClickAddSweetItemId}>Add Sweet Item</button>
                <br/>
                <button type="submit">Add Customer</button>
                <br/>
                <button type="reset">Reset</button>
                <br/>
                </div>
                </form>   
            </div>);
            component = (<div>
                <div>View Customer.Cart</div>
                <p>{this.props.message}</p>
                <form onSubmit = {this.onSubmit} onReset = {this.onReset}>
                <div>
                User Id : <input type = "number" min = "0" value = {this.props.Customer.UserId} ref = {this.userIdRef}/> <br/>
                Username : <input type = "string" min = "3" Value = {this.props.Customer.Username} ref = {this.usernameRef}/> <br/>
                {this.cartIds}
                <br/>
                <input type = "number" min = "0" step = {1} ref = {this.addCartIdRef} placeholder = "Cart ID"/><button type = "button" onClick = {this.onClickAddCartId}>Add cart</button>
                <br/>
                <button type="submit">Add Customer</button>
                <br/>
                <button type="reset">Reset</button>
                <br/>
                </div>
                </form>   
            </div>);
        }
        
        return component;
    }


    renderSweetOrderIds = () =>{
        
       this.sweetOrderIds = [];
       for (let id of this.props.sweetOrderIds){
           this.sweetOrderIds.push(
           <div key = {id}>{id} <button type = "button" onClick = {this.onClickRemoveSweetOrderId.bind(this,id)}>Remove</button></div>  
           );
       }
       console.log("Sweet Order Id tags:"+(this.sweetOrderIds));
    }
    renderSweetItemIds = () =>{
        
        this.sweetItemsIds = [];
        for (let id of this.props.sweetItemsIds){
            this.sweetItemIds.push(
            <div key = {id}>{id} <button type = "button" onClick = {this.onClickRemoveSweetItemId.bind(this,id)}>Remove</button></div>  
            );
        }
        console.log("Sweet item id tags:"+(this.sweetItemIds));        
     }
 
     renderCartIds = () =>{
         
         this.cartIds = [];
         for (let id of this.props.cartIds){
             this.cartIds.push(
             <div key = {id}>{id} <button type = "button" onClick = {this.onClickRemoveCartId.bind(this,id)}>Remove</button></div>  
             );
         }
         console.log("Cart id tags:"+(this.cartIds));
      }


    onSubmit = (event) => {
        event.preventDefault();
        const listSweetOrder = Array.from(this.props.sweetOrderIds);
        const Customer = {
            username : this.usernameRef.current.value,
            userId : this.userIdRef.current.value,
            listSweetOrder : this.listSweetOrder,
            listSweetItem : this.listSweetItem,
            cart : this.cart
        }
        this.props.onSubmit(Customer);
    }

    onReset = (event) => {
        this.props.onReset();
        this.forceUpdate();
    }

    onClickRemoveSweetOrderId = (id,event) => {
        this.props.onClickRemoveSweetOrderId(id);
        this.forceUpdate();
    }

    onClickAddSweetOrderId = (event) =>{
        if (this.addSweetOrderIdRef.current.value){
            this.props.onClickAddSweetOrderId(Number(this.addSweetOrderIdRef.current.value));
            this.forceUpdate();
        }
        
    }
    onSubmit = (event) => {
        event.preventDefault();
        const listSweetItem = Array.from(this.props.sweetItemIds);
        const customer = {
            username : this.usernameRef.current.value,
            userId : this.userIdRef.current.value,
            listSweetOrder : this.listSweetOrder,
            listSweetItem : this.listSweetItem,
            cart : this.cart
        }
        this.props.onSubmit(customer);
    }

    onReset = (event) => {
        this.props.onReset();
        this.forceUpdate();
    }

    onClickRemoveSweetItemId = (id,event) => {
        this.props.onClickRemoveSweetItemId(id);
        this.forceUpdate();
    }

    onClickAddSweetItemId = (event) =>{
        if (this.addCartIdRef.current.value){
            this.props.onClickAddSweetItemId(Number(this.addSweetItemIdRef.current.value));
            this.forceUpdate();
       }   
    }
    onSubmit = (event) => {
        event.preventDefault();
        const Cart = Array.from(this.props.cartIds);
        const customer = {
            username : this.usernameRef.current.value,
            userId : this.userIdRef.current.value,
            listSweetOrder : this.listSweetOrder,
            listSweetItem : this.listSweetItem,
            cart : this.cart
        }
        this.props.onSubmit(customer);
    }

    onReset = (event) => {
        this.props.onReset();
        this.forceUpdate();
    }

    onClickRemoveCartId = (id,event) => {
        this.props.onClickRemoveCartId(id);
        this.forceUpdate();
    }

    onClickAddCartId = (event) =>{
        if (this.addCartRef.current.value){
            this.props.onClickAddCartId(Number(this.addCartIdRef.current.value));
            this.forceUpdate();
        }
    
}
}