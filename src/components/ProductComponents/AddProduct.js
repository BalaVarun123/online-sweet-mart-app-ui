import React from "react";
import { connect } from "react-redux";
import {  _displayMessage, _redirectToShow } from '../../actions/ProductActions';
import AddProductComponent from './AddProductComponent';
import ProductService from '../../services/ProductServices/ProductService'
import Header from '../pages/Header';
import Footer from '../pages/Footer';
const productService = new ProductService();
class AddProduct extends React.Component{
    render(){
        if (this.props.redirectToShow)
            this.props.history.push(`/product/show-by-id/${this.props.redirectionId}`)
        return <div className = "ui container">
            <Header title="ADD PRODUCT" />
            
            <br/>
            <AddProductComponent message = {this.props.message} product = {this.props.product} onSubmit = {this.props.onSubmit}/>
            <br/><br/>
            <Footer></Footer>
        </div>
    }
}
const mapStateToProps = (state,props) => {
    return {
        product : state.product.product,
        message : state.product.message,
        redirectToShow : state.product.redirectToShow,
        redirectionId : state.product.redirectionId
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit : (product) => {
            console.log("onSubmit activated");
            const responseCallBack = (response) => {
               alert("Product Added successfully.");
                dispatch(_redirectToShow(true,response.data.productId));
            };
            const catchCallBack = (error) => {
                console.log("the error is :"+JSON.stringify(error));
                dispatch(_displayMessage(error.response.data));
            }
            productService.addProduct(product,responseCallBack,catchCallBack );
        }
       
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddProduct);