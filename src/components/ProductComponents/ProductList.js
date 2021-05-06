import React from "react";
import { connect } from "react-redux";
import { _addProduct, _displayMessage, _redirectToShow, _redirectToUpdate, _showAllProduct, _showProduct } from '../../actions/ProductActions';
import ProductService from '../../services/ProductServices/ProductService';
import ListProductComponent from './ListProductComponent';
import Header from '../pages/Header';
import Footer from '../pages/Footer';
const  productService = new ProductService();
class ProductList extends React.Component{
   
    render(){
        if(this.props.redirectToShow){
        this.props.history.push(`/product/show-by-id/${this.props.redirectionId}`)}
        if(this.props.redirectToUpdate){
        this.props.history.push(`/product/update/${this.props.redirectionId}`)}
        return <div className = "ui container">
            <Header title="SHOW PRODUCTS" />
            <br/>
            <ListProductComponent productList = {this.props.productList} message = {this.props.message} onClickShow = {this.props.onClickShow} onClickAdd = {this.props.onClickAdd} onClickUpdate = {this.props.onClickUpdate} onClickDelete = {this.props.onClickDelete}/>
            <br/><br/><br/>
            <Footer></Footer>
        </div>
    }

    componentDidMount(){
        productService.getAllProducts(this.props.loadResponseCallBack ,this.props.loadCatchCallBack)
    }


    


}
const mapStatesToProps = (state, props) => {
    return {
        productList : state.product.productList,
        message : state.product.message,
        redirectToShow : state.product.redirectToShow,
        redirectToUpdate : state.product.redirectToUpdate,
        redirectionId : state.product.redirectionId
    }
}

const mapDispatchToProps = (dispatch) =>{
    const loadResponseCallBack = (response) => {dispatch(_showAllProduct(response.data))};
    const loadCatchCallBack = (error) => dispatch(_showAllProduct([], "Could not retrieve data."));
    const deleteResponseCallBack =  (response) => {
        dispatch(_displayMessage("Record deleted."));
        productService.getAllProducts(loadResponseCallBack,loadCatchCallBack)
        }
    const deleteCatchCallBack = (error) => dispatch(_displayMessage(error.response.data));

    return {
        loadResponseCallBack : loadResponseCallBack,
        loadCatchCallBack : loadCatchCallBack,
        onClickDelete : (id) => {
            productService.deleteProduct(id,deleteResponseCallBack,deleteCatchCallBack );
        },
        onClickUpdate : (id) => {
            dispatch(_redirectToUpdate(true,id));
        },
        onClickShow : (id) =>{
            
            dispatch(_redirectToShow(true,id));
        }
    }
}

export default connect(mapStatesToProps,mapDispatchToProps)(ProductList);