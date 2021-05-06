import React from "react";

import { connect } from "react-redux";
import { _addSweetOrderId, _displayMessage, _redirectToUpdate, _removeSweetOrderId, _resetSweetOrderId, _showOrderBill } from "../../actions/OrderBillActions";
import OrderBillService from "../../services/OrderBillServices/OrderBillService";
import UpdateOrderBillComponent from "./UpdateOrderBillComponent";


const orderBillService = new OrderBillService();
class UpdateOrderBill extends React.Component{
    
    render(){
        if (this.props.redirectToUpdate){
            this.props.resetRedirection();
        }
        return <div className = "ui container">
            <div className="ui huge header center aligned">Update Order Bill</div>
            <UpdateOrderBillComponent message = {this.props.message} orderBill = {this.props.orderBill} sweetOrderIds = {this.props.sweetOrderIds} onSubmit = {this.props.onSubmit}  onClickRemoveSweetOrderId = {this.props.onClickRemoveSweetOrderId}  onClickAddSweetOrderId = {this.props. onClickAddSweetOrderId} onReset = {this.props.onReset}/>
        </div>
    }


    componentDidMount(){
        console.log("update component mounted");
        orderBillService.getOrderBill(this.props.id,this.props.responseCallBack,this.props.catchCallBack);
    }

}

const mapStateToProps = (state,props) => {
    return {
        orderBill : state.orderBill.orderBill,
        message : state.orderBill.message,
        id : props.match.params.id,
        redirectToUpdate: state.orderBill.redirectToUpdate,
        sweetOrderIds : state.orderBill.sweetOrderIds
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        responseCallBack : (response) => {
            console.log("The response is "+JSON.stringify(response.data[0]));
            if (response.data.length > 0)
            dispatch(_showOrderBill(response.data[0], ""));
            else 
            dispatch(_showOrderBill(null,"Invalid Order Bill Id"));

        },
        catchCallBack : (error) => {dispatch(_showOrderBill(null,error.response.data))},
        onSubmit : (orderBill) => {
            console.log("onSubmit activated");
            const responseCallBack = (response) => dispatch(_displayMessage("Updated successfully."));
            const catchCallBack = (error) => {
                console.log("the error is :"+JSON.stringify(error));
                dispatch(_displayMessage(error.response.data));
            }
            orderBillService.updateOrderBill(orderBill,responseCallBack,catchCallBack );
        },
        resetRedirection : () => {dispatch(_redirectToUpdate(false))},
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

export default connect(mapStateToProps,mapDispatchToProps)(UpdateOrderBill);
