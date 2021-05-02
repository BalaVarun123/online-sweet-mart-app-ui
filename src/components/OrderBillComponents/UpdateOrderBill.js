import React from "react";

import { connect } from "react-redux";
import { _displayMessage, _redirectToUpdate, _showOrderBill } from "../../actions/OrderBillActions";
import OrderBillService from "../../services/OrderBillServices/OrderBillService";
import UpdateOrderBillComponent from "./UpdateOrderBillComponent";


const orderBillService = new OrderBillService();
class UpdateOrderBill extends React.Component{
    render(){
        if (this.props.redirectToUpdate){
            this.props.resetRedirection();
        }
        return <div>
            <h2>UpdateAdmin</h2>
            <br/>
            <UpdateOrderBillComponent message = {this.props.message} orderBill = {this.props.orderBill} onSubmit = {this.props.onSubmit} onClickViewSweetOrders = {this.props.onClickViewSweetOrders}/>
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
        redirectToUpdate: state.orderBill.redirectToUpdate
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        responseCallBack : (response) => {
            if (response.data.length > 0)
            dispatch(_showOrderBill(response.data[0], ""))
            else 
            dispatch(_showOrderBill(null,"Invalid Order Bill Id"))
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
        onClickViewSweetOrders : () => {},
        resetRedirection : () => {dispatch(_redirectToUpdate(false))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateOrderBill);
