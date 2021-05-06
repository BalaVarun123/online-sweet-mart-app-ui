import React from "react";

import { connect } from "react-redux";
import {_displayMessage,  _redirectToUpdate, _showProduct } from '../../actions/ProductActions';
import ProductService from '../../services/ProductServices/ProductService';
import UpdateProductComponent from './UpdateProductComponent';
import Header from '../pages/Header';
import Footer from '../pages/Footer';

const productService = new ProductService();
class UpdateProduct extends React.Component{
    
    render(){
        if (this.props.redirectToUpdate){
            this.props.resetRedirection();
        }
        return <div className = "ui container">
            <Header title="UPDATE PRODUCT DETAILS" />
            <br/>
            <UpdateProductComponent message = {this.props.message} product = {this.props.product} onSubmit = {this.props.onSubmit}/>
            <br/><br/><br/><br/>
            <Footer></Footer>
        </div>
    }


    componentDidMount(){
        console.log("update component mounted");
        productService.getProduct(this.props.id,this.props.responseCallBack,this.props.catchCallBack);
    }

}

const mapStateToProps = (state,props) => {
    return {
        product : state.product.product,
        message : state.product.message,
        id : props.match.params.id,
        redirectToUpdate: state.product.redirectToUpdate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        responseCallBack : (response) => {
            console.log("The given response is "+JSON.stringify(response.data));
            dispatch(_showProduct(response.data, ""));

        },
        // catchCallBack : (error) => {dispatch(_showProduct(null,error.response.data))},
        onSubmit : (product) => {
            console.log("onSubmit activated");
            const responseCallBack = (response) => dispatch(_displayMessage("Updated successfully."));
            const catchCallBack = (error) => {
                console.log("the error is :"+JSON.stringify(error));
                // dispatch(_displayMessage(error.response.data));
            }
            productService.updateProduct(product,responseCallBack,catchCallBack );
        },
        resetRedirection : () => {dispatch(_redirectToUpdate(false))}
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateProduct);
