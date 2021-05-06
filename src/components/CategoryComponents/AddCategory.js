import React from "react";
import { connect } from "react-redux";
import { _displayMessage, _redirectToShow } from "../../actions/CategoryActions";
import CategoryService from "../../services/CategoryServices/CategoryService";
import AddCategoryComponent from "./AddCategoryComponent";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
const categoryService = new CategoryService();
class AddCategory extends React.Component{
    render(){
        if (this.props.redirectToShow)
            this.props.history.push(`/category/show/${this.props.redirectionId}`)
        return <div className="ui container">
            <Header title="WELCOME TO ADD CATEGORY" />
            <br/>
           <div className = "ui huge header center aligned"> Add Category</div>
            
            <AddCategoryComponent message = {this.props.message}   onSubmit = {this.props.onSubmit} onReset = {this.props.onReset} />
            <br/>
           <Footer></Footer>
        </div>
    }
}
const mapStateToProps = (state,props) => {
    return {
        message : state.category.message,
        redirectToShow : state.category.redirectToShow,
        redirectionId : state.category.redirectionId
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit : (category) => {
            console.log("onSubmit activated");
            const responseCallBack = (response) => {
                console.log("Category Id is:"+JSON.stringify(response.data))
                alert("Added successfully")
                dispatch(_redirectToShow(true,response.data.categoryId));
            };
            const catchCallBack = (error) => {
                console.log("the error is :"+JSON.stringify(error));
                dispatch(_displayMessage(error.response.data));
            }
            categoryService.addCategory(category,responseCallBack,catchCallBack );
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddCategory);