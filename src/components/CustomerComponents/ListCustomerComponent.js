import React from "react";
class ListCustomerComponent extends React.Component{



    constructor(props){
        super(props);
        this.details = [];
    }

    render(){
        this.loadDetails(this.props.customerList);
        return <div>
        
           
            <div >
            <table class="ui red table"  >                
            <thead>
              <tr>
                  <th className = "center aligned">USER ID</th>
                  <th className = "center aligned">USER NAME</th>
                  <th className = "center aligned">SWEET ORDER</th>
                  <th className = "center aligned">SWEET ITEM</th>
              </tr>  
            </thead>
            <tbody>{this.details}</tbody>
           </table>
           </div>
        </div>
    }


    loadDetails = (customerList) =>{
        console.log("customerList is of length :"+customerList.length);
        if (customerList && customerList.length > 0){
            let rows = [];
            for (let customer of customerList){
                rows.push(
                    <tr key = {customer.userId}>
                        <td>{customer.userId}</td>
                        <td>{customer.username}</td>
                        {/* <td>{customer.listSweetOrder.map((sweetOrder) => <button id = {`btn-so-${sweetOrder.sweetOrderId}`}>{sweetOrder.sweetOrderId}</button>)}</td>
                        <td>{customer.listSweetItem.map((sweetItem) => <button id = {`btn-so-${sweetItem.sweetItemId}`}>{sweetItem.sweetItemId}</button>)}</td> */}
                        {/* <td>{customer.cart.map((cart) => <button id = {`btn-so-${cart.cartId}`}>{cart.cartId}</button>)}</td> */}
                        <td className = "center aligned"><button className = "ui button primary" type="button" onClick = {this.onClickUpdate.bind(this,customer.userId)}>UPDATE</button></td>
                        <td className = "center aligned"><button className = "ui button negative" type="button" onClick = {this.onClickDelete.bind(this,customer.userId)}>DELETE</button></td>
                    </tr>
                );
            }
            this.details = rows;
        }
        
    }


    componentDidMount(){
        console.log("component mounted");
    }

    onClickUpdate = (id,event)=>{
        this.props.onClickUpdate(id);
    }

    onClickDelete = (id,event) => {
        this.props.onClickDelete(id);
    }

    onClickViewSweetOrders = (event) => {

    }
    onClickViewSweetItems = (event) => {

    }

    onClickViewCart = (event) => {

    }


}

export default ListCustomerComponent;