import React from "react";
import { connect } from "react-redux";
import { _addProductId,_addSweetOrderId, _displayMessage, _redirectToUpdate, _removeProductId, _resetProductId, _removeSweetOrderId, _resetSweetOrderId, _showSweetItem } from "../../actions/SweetItemActions";
import SweetItemService from "../../services/SweetItemServices/SweetItemService";
import UpdateSweetItemComponent from "./UpdateSweetItemComponent";


const sweetItemService = new SweetItemService();
class UpdateSweetItem extends React.Component{
    
    render(){
        if (this.props.redirectToUpdate){
            this.props.resetRedirection();
        }
        return <div>
            <h2>UpdateAdmin</h2>
            <br/>
            <UpdateSweetItemComponent message = {this.props.message} sweetItem = {this.props.sweetItem} productIds = {this.props.productIds} onSubmit = {this.props.onSubmit}  onClickRemoveProductId = {this.props.onClickRemoveProductId} onClickAddProductId = {this.props. onClickAddProductId} sweetOrderIds = {this.props.sweetOrderIds} onSubmit = {this.props.onSubmit}  onClickRemoveSweetOrderId = {this.props.onClickRemoveSweetOrderId}  onClickAddSweetOrderId = {this.props. onClickAddSweetOrderId} onReset = {this.props.onReset}/>
        </div>
    }


    componentDidMount(){
        console.log("update component mounted");
        sweetItemService.getSweetItem(this.props.id,this.props.responseCallBack,this.props.catchCallBack);
    }

}

const mapStateToProps = (state,props) => {
    return {
        sweetItem : state.sweetItem.sweetItem,
        message : state.sweetItem.message,
        id : props.match.params.id,
        redirectToUpdate: state.sweetItem.redirectToUpdate,
        productIds : state.sweetItem.productIds,
        sweetOrderIds : state.sweetItem.sweetOrderIds
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        responseCallBack : (response) => {
            console.log("The response is "+JSON.stringify(response.data[0]));
            if (response.data.length > 0)
            dispatch(_showSweetItem(response.data[0], ""));
            else 
            dispatch(_showSweetItem(null,"Invalid Order Item Id"));

        },
        catchCallBack : (error) => {dispatch(_showSweetItem(null,error.message))},
        onSubmit : (sweetItem) => {
            console.log("onSubmit activated");
            const responseCallBack = (response) => dispatch(_displayMessage("Updated successfully."));
            const catchCallBack = (error) => {
                console.log("the error is :"+JSON.stringify(error));
                dispatch(_displayMessage(error.response.data));
            }
            sweetItemService.updateSweetItem(sweetItem,responseCallBack,catchCallBack );
        },
        
        
        resetRedirection : () => {dispatch(_redirectToUpdate(false))},
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

export default connect(mapStateToProps,mapDispatchToProps)(UpdateSweetItem);
