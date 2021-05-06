import React from "react";
import { connect } from "react-redux";
import { _displayMessage, _redirectToUpdate, _showAllcategory } from "../../actions/CategoryActions";
import CategoryService from "../../services/CategoryServices/CategoryService";
import ListCategoryComponent from "./ListCategoryComponent";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
const  categoryService = new CategoryService();
class ListCategory extends React.Component{
   
    render(){
        if (this.props.redirectToUpdate)
        this.props.history.push(`/category/update/${this.props.redirectionId}`)
        return <div className = "ui container">
            <Header title="WELCOME TO SHOW ALL CATEGORY" />
            <div className="ui huge header center aligned"> All Category</div>
            <ListCategoryComponent categoryList = {this.props.categoryList} message = {this.props.message} onClickUpdate = {this.props.onClickUpdate} onClickDelete = {this.props.onClickDelete}/>
            <Footer></Footer>
        </div>
    }

    componentDidMount(){
        categoryService.getAllCategory(this.props.loadResponseCallBack ,this.props.loadCatchCallBack)
    }


    


}
const mapStatesToProps = (state, props) => {
    return {
        categoryList : state.category.categoryList,
        message : state.category.message,
        redirectToUpdate : state.category.redirectToUpdate,
        redirectionId : state.category.redirectionId
    }
}

const mapDispatchToProps = (dispatch) =>{
    const loadResponseCallBack = (response) => {dispatch(_showAllcategory(response.data))};
    const loadCatchCallBack = (error) => dispatch(_showAllcategory([], "Could not retrieve data."));
    const deleteResponseCallBack =  (response) => {
        dispatch(_displayMessage("Record deleted."));
        categoryService.getAllCategory(loadResponseCallBack,loadCatchCallBack)
        }
    const deleteCatchCallBack = (error) => dispatch(_displayMessage(error.response.data));
    return {
        loadResponseCallBack : loadResponseCallBack,
        loadCatchCallBack : loadCatchCallBack,
        onClickDelete : (id) => {
            categoryService.deleteCategory(id,deleteResponseCallBack,deleteCatchCallBack );
        },
        onClickUpdate : (id) => {
            dispatch(_redirectToUpdate(true,id));
        }
    }
}

export default connect(mapStatesToProps,mapDispatchToProps)(ListCategory);