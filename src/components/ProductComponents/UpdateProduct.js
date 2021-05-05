import React from "react";

import { connect } from "react-redux";
import ProductService from '../../services/ProductServices/ProductServices';
import UpdateProductComponent from './UpdateProductComponent';


const productService = new ProductService();
class UpdateProduct extends React.Component{
    
    render(){
        if (this.props.redirectToUpdate){
            this.props.resetRedirection();
        }
        return <div>
            <h2>Update Product</h2>
            <br/>
            <UpdateProductComponent product = {this.props.product} onSubmit = {this.props.onSubmit}/>
        </div>
    }


    componentDidMount(){
        console.log("update component mounted");
        productService.getProduct(this.props.id,this.props.responseCallBack,this.props.catchCallBack);
    }

}

const mapStateToProps = (state,props) => {
    return {
        orderBill : state.orderBill.orderBill,
        id : props.match.params.id,
        redirectToUpdate: state.product.redirectToUpdate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        responseCallBack : (response) => {
            console.log("The response is "+JSON.stringify(response.data[0]));
            if (response.data.length > 0)
            dispatch(response.data[0], "");
            else 
            dispatch(null,"Invalid Order Bill Id");

        },
        catchCallBack : (error) => {dispatch(null,error.response.data)},
        onSubmit : (product) => {
            console.log("onSubmit activated");
            const responseCallBack = (response) => dispatch("Updated successfully.");
            const catchCallBack = (error) => {
                console.log("the error is :"+JSON.stringify(error));
                dispatch(error.response.data);
            }
            productService.UpdateProduct(product,responseCallBack,catchCallBack );
        },
        resetRedirection : () => {dispatch(false)}
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateProduct);
