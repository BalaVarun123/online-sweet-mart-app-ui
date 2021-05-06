import React from "react";

import { connect } from "react-redux";
import ShowCategoryComponent from "./ShowCategoryComponent";
import {_displayMessage, _redirectToShow, _redirectToUpdate, _showcategory} from "../../actions/CategoryActions";
import CategoryService from "../../services/CategoryServices/CategoryService";
import Header from "../pages/Header";
import Footer from "../pages/Footer";

const categoryService = new CategoryService();
class ShowCategory extends React.Component{

    

    render(){
        if (this.props.redirectToUpdate){
            this.props.history.push(`/category/update/${this.props.id}`)
        }
        if (this.props.redirectToShow){
            this.props.resetRedirection();
        }
        return <div className = "ui container">
             <Header title="WELCOME TO SHOW CATEGORY" />
            <div className="ui huge header center aligned"> Category Details</div>
            <ShowCategoryComponent category = {this.props.category} onClickDelete = {this.onClickDelete} onClickUpdate = {this.props.onClickUpdate} message = {this.props.message}/>
            <Footer></Footer>
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
        redirectToUpdate: state.category.redirectToUpdate,
        redirectToShow : state.category.redirectToShow
    }

}
const mapDispatchToProps = (dispatch) => {
    return {

        onClickUpdate : () => {dispatch(_redirectToUpdate(true))},
        responseCallBack : (response) => {
        dispatch(_showcategory(response.data, ""))
        },
        catchCallBack : (error) => {dispatch(_showcategory(null,error.response.data))},
        resetRedirection : () => {dispatch(_redirectToShow(false))}
    }
   

}
export default connect(mapStateToProps,mapDispatchToProps)(ShowCategory); 