import React from "react";
import { Link } from "react-router-dom";
class ListProductComponent extends React.Component{



    constructor(props){
        super(props);
        this.details = [];
    }

    render(){
        this.loadDetails(this.props.productList);
        return <div>
            <div class="three wide column"></div>
            <p>{this.props.message}</p> 
            <div>
            <table className = "ui celled table large selectable">
            <thead>
              <tr>
                  <th  className = "center aligned">Product_Id</th>
                  <th  className = "center aligned">Name</th>
                  
                  <th  className = "center aligned" colSpan = {2}>Action</th> 
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
                        
                        {/* <td  className = "center aligned"><button type="button" className = "ui button primary" onClick = {this.onClickView.bind(this,Product.productId)}>VIEW</button></td> */}
                        <td  className = "center aligned"><button type="button" className = "ui button primary" onClick = {this.onClickUpdate.bind(this,Product.productId)}>UPDATE</button></td>
                        <td  className = "center aligned"><button type="button" className = "ui button negative" onClick = {this.onClickDelete.bind(this,Product.productId)}>DELETE</button></td>
                        
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
    // onClickView = (id,event) =>{
    //     this.props.onClickView(id);
    // }


}

export default ListProductComponent;