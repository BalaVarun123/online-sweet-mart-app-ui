import React from "react";
export default class UpdateCustomerComponent extends React.Component{

    userIdRef = React.createRef();
    usernameRef = React.createRef();
    addSweetOrderIdRef = React.createRef();
    addSweetItemIdRef = React.createRef();
    addCartIdRef = React.createRef();


    constructor(props){
        super(props);
        this.sweetOrderIds = [];
        this.sweetItemIds = [];

    }


    render(){

        let component;
        if (this.props.customer == null)
        component = <p>{this.props.message}</p>
        else{
            this.renderSweetOrderIds();
           // this.renderSweetItemIds();
            component = (<div>
                <div className="three wide column"></div>
              
                <form onSubmit = {this.onSubmit} onReset = {this.onReset} className = "ui ten wide column form segment">
                <div>
                <div className = "field">
                <i class="id card icon"></i>
                <label>User Id : </label> <input type = "number" min = "0" value = {this.props.customer.userId} ref = {this.userIdRef}/> 
                <br/>
                </div>
                <div className = "field"></div>
                <i class="user plus icon"></i>
                <label>Username : </label><input type = "string" min = "3" defaultValue = {this.props.customer.username} ref = {this.usernameRef}/> 
                <br/>
                </div>
                <div className = "field">
                <i class="shopping cart icon"></i>
                <label>cart id : </label> <input type = "number" min ="0" defaultValue = {this.props.customer.cart} ref = {this.addCartIdRef}/> 
                <br/>
                </div>
                <div className = "field">
                <i class="dolly icon"></i>
                <label>sweet Order Ids : </label> <br/>
                {this.sweetOrderIds}
                <br/>
                <input type = "number" min = "0" step = {1} ref = {this.addSweetOrderIdRef} placeholder = "Sweet Order ID"/>
                <button type = "button" onClick = {this.onClickAddSweetOrderId}className="ui left floated button secondary">Add Sweet Order</button>
                <br/>
                </div>
                <div className = "field">
                <label>sweet Item Ids :</label> <br/>
                  {
                      this.sweetItemIds
                  }
                  </div>
                  <div className = "field">           
                
                <input type = "number" min = "0" step = {1} ref = {this.addSweetItemIdRef} placeholder = "Sweet Item ID"/>
                <button type = "button" onClick = {this.onClickAddSweetItemId}className="ui left floated button secondary">Add Sweet Item</button>
                <br/>
                <button type="submit" className="ui left floated button primary">Add Customer</button>
                <br/>
                <button type="reset" className="ui right floated button negative">Reset</button>
                <br/>
                </div>
                <p>{this.props.message}</p>
                </form>   
            </div>);
              
        }
        
        return component;
    }


    renderSweetOrderIds = () =>{
        
       this.sweetOrderIds = [];
       for (let id of this.props.sweetOrderIds){
           this.sweetOrderIds.push(
            <div key = {id} className = "inline field">
            <label>{id}</label> 
           <button type = "button" onClick = {this.onClickRemoveSweetOrderId.bind(this,id)} className="ui tiny button negative">Remove</button></div>  
           );
       }
       console.log("Sweet Order Id tags:"+(this.sweetOrderIds));
    }
    renderSweetItemIds = () =>{
        
        this.sweetItemsIds = [];
        for (let id of this.props.sweetItemsIds){
            this.sweetItemIds.push(
                <div key = {id} className = "inline field">
                <label>{id}</label>
             <button type = "button" onClick = {this.onClickRemoveSweetItemId.bind(this,id)}className="ui tiny button negative">Remove</button></div>  
            );
        }
        console.log("Sweet item id tags:"+(this.sweetItemIds));        
     }


    onSubmit = (event) => {
        event.preventDefault();
        const listSweetOrder = Array.from(this.props.sweetOrderIds);
        const Customer = {
            username : this.usernameRef.current.value,
            userId : this.userIdRef.current.value,
            listSweetOrder : this.listSweetOrder,
            // listSweetItem : this.listSweetItem,
            // cart : this.cart
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
            // listSweetOrder : this.listSweetOrder,
            listSweetItem : this.listSweetItem,
            // cart : this.cart
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
    // onSubmit = (event) => {
    //     event.preventDefault();
    //     const Cart = Array.from(this.props.cartIds);
    //     const customer = {
    //         username : this.usernameRef.current.value,
    //         userId : this.userIdRef.current.value,
    //         listSweetOrder : this.listSweetOrder,
    //         listSweetItem : this.listSweetItem,
    //         cart : this.cart
    //     }
    //     this.props.onSubmit(customer);
    // }

    // onReset = (event) => {
    //     this.props.onReset();
    //     this.forceUpdate();
    // }

    // onClickRemoveCartId = (id,event) => {
    //     this.props.onClickRemoveCartId(id);
    //     this.forceUpdate();
    // }

    // onClickAddCartId = (event) =>{
    //     if (this.addCartRef.current.value){
    //         this.props.onClickAddCartId(Number(this.addCartIdRef.current.value));
    //         this.forceUpdate();
    //     }
    
}
