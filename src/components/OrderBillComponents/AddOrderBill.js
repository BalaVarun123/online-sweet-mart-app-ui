import React from "react";
import { connect } from "react-redux";
import { _addSweetOrderId, _displayMessage, _redirectToShow, _removeSweetOrderId, _resetSweetOrderId } from "../../actions/OrderBillActions";
import OrderBillService from "../../services/OrderBillServices/OrderBillService";
import AddOrderBillComponent from "./AddOrderBillComponent";
const orderBillService = new OrderBillService();
class AddOrderBill extends React.Component{
    render(){
        if (this.props.redirectToShow)
            this.props.history.push(`/order-bill/show/${this.props.redirectionId}`)
        return <div>
            <h2>Order Bill Add</h2>
            <br/>
            <AddOrderBillComponent message = {this.props.message} orderBill = {this.props.orderBill} sweetOrderIds = {this.props.sweetOrderIds} onSubmit = {this.props.onSubmit} onReset = {this.props.onReset} onClickRemoveSweetOrderId = {this.props.onClickRemoveSweetOrderId} onClickAddSweetOrderId = {this.props.onClickAddSweetOrderId}/>
        </div>
    }
}
const mapStateToProps = (state,props) => {
    return {
        orderBill : state.orderBill.orderBill,
        message : state.orderBill.message,
        sweetOrderIds : state.orderBill.sweetOrderIds,
        redirectToShow : state.orderBill.redirectToShow,
        redirectionId : state.orderBill.redirectionId
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit : (orderBill) => {
            console.log("onSubmit activated");
            const responseCallBack = (response) => {
                dispatch(_displayMessage("Added successfully."));
                dispatch(_redirectToShow(true,response.data.orderBillId));
            };
            const catchCallBack = (error) => {
                console.log("the error is :"+JSON.stringify(error));
                dispatch(_displayMessage(error.response.data));
            }
            orderBillService.addOrderBill(orderBill,responseCallBack,catchCallBack );
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
export default connect(mapStateToProps,mapDispatchToProps)(AddOrderBill);