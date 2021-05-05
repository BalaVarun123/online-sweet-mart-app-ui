import React from "react";

import { connect } from "react-redux";
import { _displayMessage, _redirectToUpdate, _showcategory } from "../../actions/CategoryActions";
import CategoryService from "../../services/CategoryServices/CategoryService";
import UpdateCategoryComponent from "./UpdateCategoryComponents";


const categoryService = new CategoryService();
class UpdateCategory extends React.Component{
    
    render(){
        if (this.props.redirectToUpdate){
            this.props.resetRedirection();
        }
        return <div>
            <h2>Update Category</h2>
            <br/>
            <UpdateCategoryComponent message = {this.props.message} category = {this.props.category}  onSubmit = {this.props.onSubmit}  onReset = {this.props.onReset}/>
        </div>
    }


    componentDidMount(){
        console.log("update component mounted");
        categoryService.getCategory(this.props.id,this.props.responseCallBack,this.props.catchCallBack);
    }

}

const mapStateToProps = (state,props) => {
    return {
        category : state.category.category,
        message : state.category.message,
        id : props.match.params.id,
        redirectToUpdate: state.category.redirectToUpdate,
        sweetOrderIds : state.cateory.sweetOrderIds
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        responseCallBack : (response) => {
            console.log("The response is "+JSON.stringify(response.data[0]));
            if (response.data.length > 0)
            dispatch(_showcategory(response.data[0], ""));
            else 
            dispatch(_showcategory(null,"Invalid Category Id"));

        },
        catchCallBack : (error) => {dispatch(_showcategory(null,error.response.data))},
        onSubmit : (category) => {
            console.log("onSubmit activated");
            const responseCallBack = (response) => dispatch(_displayMessage("Updated successfully."));
            const catchCallBack = (error) => {
                console.log("the error is :"+JSON.stringify(error));
                dispatch(_displayMessage(error.response.data));
            }
            categoryService.updateCategory(category,responseCallBack,catchCallBack );
        },
        resetRedirection : () => {dispatch(_redirectToUpdate(false))},
        
       
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateCategory);
