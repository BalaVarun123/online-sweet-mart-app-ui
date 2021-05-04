import React from "react";

import { connect } from "react-redux";
import ShowCategoryComponent from "./ShowCategoryComponent";
import {_displayMessage, _redirectToShow, _redirectToUpdate, _showcategory} from "../../actions/CategoryActions";
import CategoryService from "../../services/CategoryServices/CategoryService";

const categoryService = new CategoryService();
class ShowCategory extends React.Component{

    

    render(){
        if (this.props.redirectToUpdate){
            this.props.history.push(`/category/update/${this.props.id}`)
        }
        if (this.props.redirectToShow){
            this.props.resetRedirection();
        }
        return <div>
            <h2>Show Category</h2>
            <br/>
            <ShowCategoryComponent category = {this.props.category} onClickDelete = {this.onClickDelete} onClickUpdate = {this.props.onClickUpdate} message = {this.props.message}/>
        </div>
    }


    componentDidMount(){
        categoryService.getCategory(this.props.id,this.props.responseCallBack,this.props.catchCallBack);
    }

    onClickDelete = (id) => {
        categoryService.deleteCategory(id);
        this.props.history.push("/");
    }

}

const mapStateToProps = (state,props) => {
    return {
        category : state.category.category,
        message : state.category.message,
        id : props.match.params.id,
        redirectToUpdate: state.orderBill.redirectToUpdate,
        redirectToShow : state.orderBill.redirectToShow
    }

}
const mapDispatchToProps = (dispatch) => {
    return {

        onClickUpdate : () => {dispatch(_redirectToUpdate(true))},
        responseCallBack : (response) => {
            if (response.data.length > 0)
            dispatch(_showCategory(response.data[0], ""))
            else 
            dispatch(_showCategory(null,"Invalid Category Id"))
        },
        catchCallBack : (error) => {dispatch(_showCategory(null,error.response.data))},
        resetRedirection : () => {dispatch(_redirectToShow(false))}
    }
   

}
export default connect(mapStateToProps,mapDispatchToProps)(ShowCategory); 