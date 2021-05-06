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
            <div>
            <table className = "ui celled table large selectable">
            <thead>
              <tr>
                  <th className = "center aligned">Order Item Id</th>
                  <th className = "center aligned">Product ID</th>
                  <th className = "center aligned">Sweet Order ID</th>
                  <th className = "center aligned" colSpan = {2}>Action</th> {/*UPDATE DELETE*/}
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
                        <td className = "center aligned"><button type="button" className = "ui button primary" onClick = {this.onClickUpdate.bind(this,sweetItem.orderItemId)}>UPDATE</button></td>
                        <td className = "center aligned"><button type="button" className = "ui button negative" onClick = {this.onClickDelete.bind(this,sweetItem.orderItemId)}>DELETE</button></td>
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
