import React from "react";
class ListOrderBillComponent extends React.Component{



    constructor(props){
        super(props);
        this.details = [];
    }

    render(){
        this.loadDetails(this.props.orderBillList);
        return <div>
            <p>{this.props.message}</p> 
            <div>Selected view</div>
            <div>
            <table>
            <thead>
              <tr>
                  <th>Order Bill Id</th>
                  <th>Created Date</th>
                  <th>Total Cost</th>
                  <th>Sweet Orders</th>
                  <th colSpan = {2}>Action</th> {/*UPDATE DELETE*/}
              </tr>  
            </thead>
            <tbody>{this.details}</tbody>
           </table>
           </div>
        </div>
    }


    loadDetails = (orderBillList) =>{
        console.log("orderBillList is of length :"+orderBillList.length);
        if (orderBillList && orderBillList.length > 0){
            let rows = [];
            for (let orderBill of orderBillList){
                rows.push(
                    <tr key = {orderBill.orderBillId}>
                        <td>{orderBill.orderBillId}</td>
                        <td>{orderBill.createdDate}</td>
                        <td>{orderBill.totalCost}</td>
                        <td>{orderBill.listSweetOrder.map((sweetOrder) => <button id = {`btn-so-${sweetOrder.sweetOrderId}`}>{sweetOrder.sweetOrderId}</button>)}</td>
                        <td><button type="button" onClick = {this.onClickUpdate.bind(this,orderBill.orderBillId)}>UPDATE</button></td>
                        <td><button type="button" onClick = {this.onClickDelete.bind(this,orderBill.orderBillId)}>DELETE</button></td>
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

}

export default ListOrderBillComponent;