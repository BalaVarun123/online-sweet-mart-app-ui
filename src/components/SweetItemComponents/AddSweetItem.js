
import React from "react";
import { connect } from "react-redux";
import { _addProductId,_addSweetOrderId, _displayMessage, _redirectToShow,_removeProductId, _resetProductId , _removeSweetOrderId, _resetSweetOrderId } from "../../actions/SweetItemActions";
import SweetItemService from "../../services/SweetItemServices/SweetItemService";
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import AddSweetItemComponent from "./AddSweetItemComponent";
const sweetItemService = new SweetItemService();
class AddSweetItem extends React.Component{
    render(){
        if (this.props.redirectToShow)
            this.props.history.push(`/sweet-item/show/${this.props.redirectionId}`)
        return <div className = "ui container">
            <Header title="ADD SWEET ITEM" />
            <br/>
            <AddSweetItemComponent message = {this.props.message} onSubmit = {this.props.onSubmit} />
            <br/><br/>
            <Footer></Footer>
        </div>
    }
}
const mapStateToProps = (state,_props) => {
    return {
        message : state.sweetItem.message,
        redirectToShow : state.sweetItem.redirectToShow,
        redirectionId : state.sweetItem.redirectionId
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit : (sweetItem) => {
            console.log("onSubmit activated");
            const responseCallBack = (response) => {
                dispatch(_displayMessage("Added successfully."));
                dispatch(_redirectToShow(true,response.data.orderItemId));
            };
            const catchCallBack = (error) => {
                console.log("the error is :"+JSON.stringify(error));
                dispatch(_displayMessage(error.message));
                
            }
            sweetItemService.addSweetItem(sweetItem,responseCallBack,catchCallBack );
        },
        
    
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddSweetItem);
