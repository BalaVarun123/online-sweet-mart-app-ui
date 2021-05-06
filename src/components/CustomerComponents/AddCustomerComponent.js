import React from "react";
export default class AddCustomerComponent extends React.Component{
    userIdRef = React.createRef();
    usernameRef = React.createRef();
    addSweetOrderIdRef = React.createRef();
    addSweetItemIdRef = React.createRef();
    addCartIdRef = React.createRef();
   
    constructor(props){
        super(props);
            this.sweetOrderIds = [];
            this.sweetItemsIds = [];
            this.cartIds = [];
    }
    render(){
        this.renderSweetOrderIds();
        this.renderSweetItemIds();
   
        let component = (<div>
            <div>View Customer.SweetOrders</div>
            <form onSubmit = {this.onSubmit} onReset = {this.onReset}>
                <div>
                User Id : <input type = "number" min = "0" ref = {this.userIdRef}/> <br/>
                Username : <input type = "string" min = "3" ref = {this.usernameRef}/> <br/>
                cart id : <input type = "number" min ="0"  ref = {this.addCartIdRef}/> <br/>
                sweet Order Ids :  <br/>
                {this.sweetOrderIds}
                <br/>
                sweet Item Ids : <br/>
                  {
                      this.sweetItemsIds
                  }
              
                <input type = "number" min = "0" step = {1} ref = {this.addSweetOrderIdRef} placeholder = "Sweet Order ID"/>
                <button type = "button" onClick = {this.onClickAddSweetOrderId}>Add Sweet Order</button>
                <br/>
                <input type = "number" min = "0" step = {1} ref = {this.addSweetItemIdRef} placeholder = "Sweet Item ID"/>
                <button type = "button" onClick = {this.onClickAddSweetItemId}>Add Sweet Item</button>
                <br/>
                <button type="submit">Add Customer</button>
                <br/>
                <button type="reset">Reset</button>
                <br/>
                </div>              
                <div>
             {this.cartIds}
                <br/>
                <input type = "number" min = "0" step = {1} ref = {this.addCartIdRef} placeholder = "Cart ID"/><button type = "button" onClick = {this.onClickAddCartId}>Add cart</button>
                <br/>
                <button type="submit">Add Customer</button>
                <br/>
                <button type="reset">Reset</button>
                <br/>
                </div>
                <p>{this.props.message}</p>
            </form>   
        </div>);
         return component;
    }

   
    
    renderSweetOrderIds = () =>{
        this.sweetOrderIds = [];
        console.log("this is sweet order"+new Set(this.props.sweetOrderIds))
        for (let id of this.props.sweetOrderIds){
            this.sweetOrderIds.push(
            <div key = {id}>{id} <button type = "button" onClick = {this.onClickRemoveSweetOrderId.bind(this,id)}>Remove</button></div>  
            );
        }
     }
 
    renderSweetItemIds = () =>{
        this.sweetItemsIds = [];
        for (let id of this.props.sweetItemIds){
            this.sweetItemsIds.push(
            <div key = {id}>{id} <button type = "button" onClick = {this.onClickRemoveSweetItemId.bind(this,id)}>Remove</button></div>  
            );
        }
     }
 
    // renderCartIds = () =>{
    //      this.cartIds = [];
    //      for (let id of this.props.cartIds){
    //          this.cartIds.push(
    //          <div key = {id}>{id} <button type = "button" onClick = {this.onClickRemoveCartId.bind(this,id)}>Remove</button></div>  
    //          );
    //      }
    //   }
  
 
    onSubmit = (event) => {
         event.preventDefault();
         console.log("this is adding"+(Array.from(this.props.sweetItemIds)))
        //  const listSweetOrder = Array.from(this.props.sweetOrderIds);
          const customer = {}

             customer.sweetOrders = Array.from(this.props.sweetOrderIds)
             customer.sweetItems = Array.from(this.props.sweetItemIds)
             customer.username = this.usernameRef.current.value
             customer.cartId = this.addCartIdRef.current.value

         this.props.onSubmit(customer);
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
 
    

     
    onReset = (event) => {
             this.props.onReset();
             this.forceUpdate();
         }
     
    onClickRemoveSweetItemId = (id,event) => {
             this.props.onClickRemoveSweetItemId(id);
             this.forceUpdate();
         }
     
    onClickAddSweetItemId = (event) =>{
                 this.props.onClickAddSweetItemId(Number(this.addSweetItemIdRef.current.value));
                 this.forceUpdate();
            
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
                this.props.onClickAddCartId(Number(this.addCartIdRef.current.value));
                 this.forceUpdate();
         }  
        
        }
