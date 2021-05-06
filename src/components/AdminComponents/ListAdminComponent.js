import React from "react";
import { Link } from "react-router-dom";
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
            <div>
            <table className = "ui celled table large selectable">
            <thead>
              <tr>
                  <th className = "center aligned">ID</th>
                  <th className = "center aligned">Customer ID</th>
                  <th className = "center aligned">User ID</th>
                  <th className = "center aligned">Item ID</th>
                  <th className = "center aligned">Category ID</th>
                  <th className = "center aligned">Cart ID</th>
                  <th className = "center aligned">Product ID</th>
                  <th colSpan = {2} className = "center aligned">Action</th> {/*UPDATE DELETE*/}
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
                        <td><Link to={"/admin/show/"+ admin.id}>{admin.id}</Link></td>
                        <td><Link>{admin.customer.userId}</Link></td>
                        <td><Link>{admin.user.userId}</Link></td>
                        <td><Link>{admin.item.orderItemId}</Link></td>
                        <td><Link>{admin.category.categoryId}</Link></td>
                        <td><Link>{admin.cart.cartId}</Link></td>
                        <td><Link>{admin.product.productId}</Link></td>
                        <td className = "center aligned"><button type="button" className = "ui button primary" onClick = {this.onClickUpdate.bind(this,admin.id)}>UPDATE</button></td>
                        <td className = "center aligned"><button type="button" className = "ui button negative" onClick = {this.onClickDelete.bind(this,admin.id)}>DELETE</button></td>
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


}

export default ListAdminComponent;