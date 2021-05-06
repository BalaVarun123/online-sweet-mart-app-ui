import React from "react";

import { connect } from "react-redux";
import ShowProductComponent from './ShowProductComponent';
import {_displayMessage, _redirectToShow, _redirectToUpdate, _showProduct} from '../../actions/ProductActions';
import ProductService from '../../services/ProductServices/ProductService';
import Header from '../pages/Header';
import Footer from '../pages/Footer';
const productService = new ProductService();;
class ShowProduct extends React.Component{

    

    render(){
        if (this.props.redirectToUpdate){
            this.props.history.push(`/product/update/${this.props.id}`)
        }
        if (this.props.redirectToShow){
            this.props.resetRedirection();
        }
        return <div className = "ui container center aligned">
            <Header title="PRODUCT DETAILS" />
            
            <br/>
            <ShowProductComponent product = {this.props.product} onClickDelete = {this.onClickDelete} onClickUpdate = {this.props.onClickUpdate} message = {this.props.message}/>
            <br/><br/>
            <button type="button" className="ui button"><a href="http://localhost:3000/product/show-all">PRODUCT LIST</a></button>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <Footer></Footer>
        </div>
    }


    componentDidMount(){
        productService.getProduct(this.props.id,this.props.responseCallBack,this.props.catchCallBack);
    }

    onClickDelete = (id) => {
        productService.deleteProduct(id);
        this.props.history.push("/");
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

        onClickUpdate : () => {dispatch(_redirectToUpdate(true))},
        onClickViewProduct : () => {},
        responseCallBack : (response) => {
            dispatch(_showProduct(response.data, ""))
        },
        
        // resetRedirection : () => {dispatch(_redirectToShow(false))}
    }
   

}
export default connect(mapStateToProps,mapDispatchToProps)(ShowProduct); 