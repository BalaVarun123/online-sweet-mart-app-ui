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

    }
    render(){
        this.renderSweetOrderIds();
        this.renderSweetItemIds();
   
        let component = (<div class="ui column stackable center page grid">
            <div class="three wide column"></div>
            <form onSubmit = {this.onSubmit} onReset = {this.onReset} className = "ui ten wide column form segment">
                <div>
                <i class="user plus icon"></i>
                User Id : (will be auto generated) <br/>
                <br/><div className = "field">
               <i class="id badge icon"> </i>
                <label>Username : </label> <input type = "string" min = "3" ref = {this.usernameRef}/> <br/>
                </div>
                <div className = "field">
                <i class="shopping cart icon"></i>
                <label>cart id : </label> <input type = "number" min ="0"  ref = {this.addCartIdRef}/> <br/>
                </div>
                <br/>
                <label>sweet Order Ids : </label>  <br/>
                <div className = "field">
                <i class="dolly icon"></i>
                {this.sweetOrderIds}
                <input type = "number" min = "0" step = {1} ref = {this.addSweetOrderIdRef} placeholder = "Sweet Order ID"/>
                <button type = "button"  className="ui left floated button secondary" onClick = {this.onClickAddSweetOrderId}>Add Sweet Order</button>
                <br/>
                </div>
                <br/>
                <br/><div className = "field">
                sweet Item Ids : <br/>
                  {this.sweetItemsIds}
                  <input type = "number" min = "0" step = {1} ref = {this.addSweetItemIdRef} placeholder = "Sweet Item ID"/>
                <button type = "button"  className="ui left floated button secondary" onClick = {this.onClickAddSweetItemId}>Add Sweet Item</button>
                <br/>
                  
              </div>
                

                <button type="submit" className="ui left floated button secondary">Add Customer</button>
                <br/>
                <button type="reset" className="ui right floated button negative">Reset</button>
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
                <div key = {id}  className = "inline field">
                    <label>{id} </label>
            <button type = "button" onClick = {this.onClickRemoveSweetOrderId.bind(this,id)}className="ui tiny button negative">Remove</button>
            </div>  
            );
        }
     }
 
    renderSweetItemIds = () =>{
        this.sweetItemsIds = [];
        for (let id of this.props.sweetItemIds){
            this.sweetItemsIds.push(
                <div key = {id}  className = "inline field">
                <label>{id} </label>
            <button type = "button" onClick = {this.onClickRemoveSweetItemId.bind(this,id)}className="ui tiny button negative">Remove</button></div>  
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
     
        
        }
