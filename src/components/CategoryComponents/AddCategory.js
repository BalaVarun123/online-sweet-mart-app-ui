import React from "react";
import { connect } from "react-redux";
import { _displayMessage, _redirectToShow } from "../../actions/CategoryActions";
import CategoryService from "../../services/CategoryServices/CategoryService";
import AddCategoryComponent from "./AddCategoryComponents";
const categoryService = new CategoryService();
class AddCategory extends React.Component{
    render(){
        if (this.props.redirectToShow)
            this.props.history.push(`/category/show/${this.props.redirectionId}`)
        return <div>
            <h2>category Add</h2>
            <br/>
            <AddCategoryComponent message = {this.props.message} category = {this.props.category}  onSubmit = {this.props.onSubmit} onReset = {this.props.onReset} />
        </div>
    }
}
const mapStateToProps = (state,props) => {
    return {
        category : state.category.category,
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
                dispatch(_displayMessage("Added successfully."));
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