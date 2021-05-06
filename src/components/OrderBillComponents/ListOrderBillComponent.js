import React from "react";
import { Link } from "react-router-dom";
class ListOrderBillComponent extends React.Component{



    constructor(props){
        super(props);
        this.details = [];
    }

    render(){
        this.loadDetails(this.props.orderBillList);
        return <div>
            <p>{this.props.message}</p> 
            <div>
            <table className = "ui celled table large selectable">
            <thead>
              <tr>
                  <th className = "center aligned">Order Bill Id</th>
                  <th className = "center aligned">Created Date</th>
                  <th className = "center aligned">Total Cost</th>
                  <th className = "center aligned">Sweet Orders</th>
                  <th className = "center aligned" colSpan = {2}>Action</th> {/*UPDATE DELETE*/}
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
                        <td><Link to={"/order-bill/show/"+ orderBill.orderBillId}>{orderBill.orderBillId}</Link></td>
                        <td>{orderBill.createdDate}</td>
                        <td>{orderBill.totalCost}</td>
                        <td>{orderBill.listSweetOrder.map((sweetOrder) => <a key = {sweetOrder.sweetOrderId} href = {"/sweet-order/show/"+sweetOrder.sweetOrderId}>{sweetOrder.sweetOrderId}</a>)}</td>
                        <td className = "center aligned"><button type="button" className = "ui button primary" onClick = {this.onClickUpdate.bind(this,orderBill.orderBillId)}>UPDATE</button></td>
                        <td className = "center aligned"><button type="button" className = "ui button negative" onClick = {this.onClickDelete.bind(this,orderBill.orderBillId)}>DELETE</button></td>
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