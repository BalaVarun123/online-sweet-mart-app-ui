import React from "react";
import { connect } from "react-redux";
import { _addSweetOrderId, _displayMessage, _redirectToShow, _removeSweetOrderId, _resetSweetOrderId,  _addSweetItemId ,_removeSweetItemId, _resetSweetItemId, _addCartId, _removeCartId, _resetCartId} from "../../actions/CustomerActions";
import CustomerService from "../../services/CustomerServices/CustomerService";
import AddCustomerComponent from "./AddCustomerComponent";
const customerService = new CustomerService();
class AddCustomer extends React.Component{
    render(){
        if (this.props.redirectToShow)
            this.props.history.push(`/customer/show/${this.props.redirectionId}`)
        return <div>
            <h2>Customer Add</h2>
            <br/>
            <AddCustomerComponent message = {this.props.message} customer = {this.props.customer} sweetOrderIds = {this.props.sweetOrderIds} onSubmit = {this.props.onSubmit} onReset = {this.props.onReset} onClickRemoveSweetOrderId = {this.props.onClickRemoveSweetOrderId} onClickAddSweetOrderId = {this.props.onClickAddSweetOrderId}/>
            <AddCustomerComponent message = {this.props.message} customer = {this.props.customer} sweetItemIds = {this.props.sweetItemIds} onSubmit = {this.props.onSubmit} onReset = {this.props.onReset} onClickRemoveSweetItemId = {this.props.onClickRemoveSweetItemId} onClickAddSweetItemId = {this.props.onClickAddSweetItemId}/>
            <AddCustomerComponent message = {this.props.message} customer = {this.props.customer} cartIds = {this.props.cartIds} onSubmit = {this.props.onSubmit} onReset = {this.props.onReset} onClickRemoveCartId = {this.props.onClickRemoveCartId} onClickAddCartId = {this.props.onClickAddCartId}/>
        </div>
    }
}
const mapStateToProps = (state,props) => {
    return {
        customer : state.customer.customer,
        message : state.customer.message,
        sweetOrderIds : state.customer.sweetOrderIds,
        sweetItemIds : state.customer.sweetItemIds,
        cartIds : state.customer.cartIds,
        redirectToShow : state.customer.redirectToShow,
        redirectionId : state.customer.redirectionId
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit : (customer) => {
            console.log("onSubmit activated");
            const responseCallBack = (response) => {
                dispatch(_displayMessage("Added successfully."));
                dispatch(_redirectToShow(true,response.data.userId));
            };
            const catchCallBack = (error) => {
                console.log("the error is :"+JSON.stringify(error));
                dispatch(_displayMessage(error.response.data));
            }
            customerService.addCustomer(customer,responseCallBack,catchCallBack );
        },
        onClickRemoveSweetOrderId : (id) => {
            dispatch(_removeSweetOrderId(id))
        },
        onClickAddSweetOrderId : (id) => {
            dispatch(_addSweetOrderId(id) )
        },
        onReset : () => {
            dispatch(_resetSweetOrderId());
        },
        onClickRemoveSweetItemId : (id) => {
            dispatch(_removeSweetItemId(id))
        },
        onClickAddSweetItemId : (id) => {
            dispatch(_addSweetItemId(id) )
        },
        onReset : () => {
            dispatch(_resetSweetItemId());
        },
        onClickRemoveCartId : (id) => {
            dispatch(_removeCartId(id))
        },
        onClickAddCartId : (id) => {
            dispatch(_addCartId(id) )
        },
        onReset : () => {
            dispatch(_resetCartId());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddCustomer);