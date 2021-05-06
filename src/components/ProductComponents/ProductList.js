import React from "react";
import { connect } from "react-redux";
import { _displayMessage, _redirectToUpdate, _showAllProduct } from '../../actions/ProductActions';
import ProductService from '../../services/ProductServices/ProductService';
import ListProductComponent from './ListProductComponent';
const  productService = new ProductService();
class ProductList extends React.Component{
   
    render(){
        if (this.props.redirectToUpdate)
        this.props.history.push(`/product/update/${this.props.redirectionId}`)
        return <div>
            <ListProductComponent productList = {this.props.productList} message = {this.props.message} onClickUpdate = {this.props.onClickUpdate} onClickDelete = {this.props.onClickDelete}/>
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
        }
    }
}

export default connect(mapStatesToProps,mapDispatchToProps)(ProductList);