
  
import React from "react";
class ListSweetItemComponent extends React.Component{



    constructor(props){
        super(props);
        this.details = [];
    }

    render(){
        this.loadDetails(this.props.sweetItemList);
        return <div>
            <p>{this.props.message}</p> 
            <div>Selected view</div>
            <div>
            <table>
            <thead>
              <tr>
                  <th>Order Item Id</th>
                  <th>Products</th>
                  <th>Sweet Orders</th>
                  <th colSpan = {2}>Action</th> {/*UPDATE DELETE*/}
              </tr>  
            </thead>
            <tbody>{this.details}</tbody>
           </table>
           </div>
        </div>
    }


    loadDetails = (sweetItemList) =>{
        console.log("sweetItemList is of length :"+sweetItemList.length);
        if (sweetItemList && sweetItemList.length > 0){
            let rows = [];
            for (let sweetItem of sweetItemList){
                rows.push(
                    <tr key = {sweetItem.orderItemId}>
                        <td>{sweetItem.orderItemId}</td>
                        {/* <td>{sweetItem.product.map((product) => <button id = {`btn-so-${product.productId}`}>{product.productId}</button>)}</td>
                        <td>{sweetItem.sweetOrder.map((sweetOrder) => <button id = {`btn-so-${sweetOrder.sweetOrderId}`}>{sweetOrder.sweetOrderId}</button>)}</td> */}
                        <td><button type="button" onClick = {this.onClickUpdate.bind(this,sweetItem.orderItemId)}>UPDATE</button></td>
                        <td><button type="button" onClick = {this.onClickDelete.bind(this,sweetItem.orderItemId)}>DELETE</button></td>
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

    onClickViewProducts = (event) => {

    }

    onClickViewSweetOrders = (event) => {

    }

}

export default ListSweetItemComponent;
