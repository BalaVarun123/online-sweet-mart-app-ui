import React from "react";
import { connect } from "react-redux";
import AddProductComponent from './AddProductComponent';
import ProductService from '../../services/ProductServices/ProductServices'
const productService = new ProductService();
class AddProduct extends React.Component{
    render(){
        if (this.props.redirectToShow)
            this.props.history.push(`/product/show-by-id/${this.props.redirectionId}`)
        return <div>
            <h2>Product Add</h2>
            <br/>
            <AddProductComponent message = {this.props.message} product = {this.props.product} onSubmit = {this.props.onSubmit}/>
        </div>
    }
}
const mapStateToProps = (state,props) => {
    return {
        product : state.product.product,
        message : state.product.message,
        redirectToShow : state.product.redirectToShow
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit : (product) => {
            console.log("onSubmit activated");
            const responseCallBack = (response) => {
                dispatch("Product Added successfully.");
                dispatch(true,response.data.product);
            };
            const catchCallBack = (error) => {
                console.log("the error is :"+JSON.stringify(error));
                dispatch(error.response.data);
            }
            productService.addProduct(product,responseCallBack,catchCallBack );
        },
       
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddProduct);