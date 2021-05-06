import React from "react";
class ListProductComponent extends React.Component{



    constructor(props){
        super(props);
        this.details = [];
    }

    render(){
        this.loadDetails(this.props.productList);
        return <div>
            <p>{this.props.message}</p> 
            <div>Selected view</div>
            <div>
            <table>
            <thead>
              <tr>
                  <th>Product_Id</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th colSpan = {2}>Action</th> 
              </tr>  
            </thead>
            <tbody>{this.details}</tbody>
           </table>
           </div>
        </div>
    }


    loadDetails = (productList) =>{
        console.log("productList is of length :"+productList.length);
        if (productList && productList.length > 0){
            let rows = [];
            for (let Product of productList){
                rows.push(
                    <tr key = {Product.productId}>
                        <td>{Product.productId}</td>
                        <td>{Product.name}</td>
                        <td>{Product.price}</td>
                        <td>{Product.description}</td>
                        <td><button type="button" onClick = {this.onClickUpdate.bind(this,Product.productId)}>UPDATE</button></td>
                        <td><button type="button" onClick = {this.onClickDelete.bind(this,Product.productId)}>DELETE</button></td>
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

export default ListProductComponent;