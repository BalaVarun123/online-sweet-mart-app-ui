import React from "react";
class ListAdminComponent extends React.Component{


    render(){
        return <div>
            <p>Message display</p> 
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
                  <tbody>{this.props.details}</tbody>
              </tr>  
            </thead>
           </table>
           </div>
        </div>
    }


    loadDetails(adminList){
        if (adminList && adminList.length > 0){
            let rows = [];
            for (let admin of adminList){
                rows.push(
                    <tr>
                        <td>{admin.id}</td>
                        <td>{admin.customer}</td>
                        <td>{admin.user}</td>
                        <td>{admin.id}</td>
                        <td>{admin.id}</td>
                    </tr>
                );
            }
        }
    }

}

export default ListAdminComponent;