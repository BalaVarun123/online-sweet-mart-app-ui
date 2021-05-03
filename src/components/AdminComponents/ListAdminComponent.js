import React from "react";
class ListAdminComponent extends React.Component{


    constructor(props){
        super(props);
        this.details = [];
    }

    render(){
        if (this.props.adminList)
        this.loadDetails(this.props.adminList);
        return <div>
            <p>{this.props.message}</p> 
            <div>Selected view</div>
            <div>
            <table>
            <thead>
              <tr>
                  <th>ID</th>
                  <th>Customer ID</th>
                  <th>User ID</th>
                  <th>Item ID</th>
                  <th>Category ID</th>
                  <th>Cart ID</th>
                  <th>Product ID</th>
                  <th colSpan = {2}>Action</th> {/*UPDATE DELETE*/}
              </tr>  
            </thead>
            <tbody>{this.details}</tbody>
           </table>
           </div>
        </div>
    }


    loadDetails = (adminList) =>{
        if (adminList && adminList.length > 0){
            let rows = [];
            for (let admin of adminList){
                rows.push(
                    <tr key = {admin.id}>
                        <td>{admin.id}</td>
                        <td>{admin.customer.userId}</td>
                        <td>{admin.user.userId}</td>
                        <td>{admin.item.orderItemId}</td>
                        <td>{admin.category.categoryId}</td>
                        <td>{admin.cart.cartId}</td>
                        <td>{admin.product.productId}</td>
                        <td><button type="button" onClick = {this.onClickUpdate.bind(this,admin.id)}>UPDATE</button></td>
                        <td><button type="button" onClick = {this.onClickDelete.bind(this,admin.id)}>DELETE</button></td>
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

    }

}

export default ListAdminComponent;