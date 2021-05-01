import React from "react";
class ListOrderBillComponent extends React.Component{


    render(){
        return <div>
            <p>Message display</p> 
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
                  <tbody>{this.props.details}</tbody>
              </tr>  
            </thead>
           </table>
           </div>
        </div>
    }


    loadDetails = (orderBillList) =>{
        if (orderBillList && orderBillList.length > 0){
            let rows = [];
            for (let orderBill of orderBillList){
                rows.push(
                    <tr key = {orderBill.orderBillId}>
                        <td>{orderBill.orderBillId}</td>
                        <td>{orderBill.createdDate}</td>
                        <td>{orderBill.totalCost}</td>
                        <td><button type="button">View Sweet Orders</button></td>
                        <td><button type="button">UPDATE</button></td>
                        <td><button type="button">DELETE</button></td>
                    </tr>
                );
            }
        }
    }


    componentDidMount(){
        console.log("component mounted");
    }

    onClickUpdate = (event)=>{

    }

    onClickDelete = (event) => {

    }

    onClickViewSweetOrders = (event) => {

    }

}

export default ListOrderBillComponent;