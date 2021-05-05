import React from "react";
import { connect } from "react-redux";
import { _addProductId,_addSweetOrderId, _displayMessage, _redirectToShow,_removeProductId, _resetProductId , _removeSweetOrderId, _resetSweetOrderId } from "../../actions/SweetItemActions";
import SweetItemService from "../../services/SweetItemServices/SweetItemService";
import AddSweetItemComponent from "./AddSweetItemComponent";
const sweetItemService = new SweetItemService();
class AddSweetItem extends React.Component{
    render(){
        if (this.props.redirectToShow)
            this.props.history.push(`/sweet-item/show/${this.props.redirectionId}`)
        return <div>
            <h2>Sweet Item Add</h2>
            <br/>
            <AddSweetItemComponent message = {this.props.message} sweetItem = {this.props.sweetItem} productIds = {this.props.productIds} onSubmit = {this.props.onSubmit} onReset = {this.props.onReset} onClickRemoveProductId = {this.props.onClickRemoveProductId} onClickAddProductId = {this.props.onClickAddProductId} sweetOrderIds = {this.props.sweetOrderIds} onSubmit = {this.props.onSubmit} onReset = {this.props.onReset} onClickRemoveSweetOrderId = {this.props.onClickRemoveSweetOrderId} onClickAddSweetOrderId = {this.props.onClickAddSweetOrderId}/>
        </div>
    }
}
const mapStateToProps = (state,props) => {
    return {
        sweetItem : state.sweetItem.sweetItem,
        message : state.sweetItem.message,
        productIds : state.sweetItem.productIds,
        sweetOrderIds : state.sweetItem.sweetOrderIds,
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
        onClickRemoveProductId : (id) => {
          dispatch(_removeProductId(id))
        },
        onClickAddProductId : (id) => {
            dispatch(_addProductId(id) )
        },
        onReset : () => {
            dispatch(_resetProductId());
        },
      
        onClickRemoveSweetOrderId : (id) => {
            dispatch(_removeSweetOrderId(id))
        },
        onClickAddSweetOrderId : (id) => {
            dispatch(_addSweetOrderId(id) )
        },
        onReset : () => {
            dispatch(_resetSweetOrderId());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddSweetItem);