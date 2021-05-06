import React from "react";

import { connect } from "react-redux";
import { _addSweetOrderId,_addSweetItemId, _addCartId, _displayMessage, _redirectToUpdate,
     _removeSweetOrderId, _removeSweetItemId,_removeCartId,_resetSweetOrderId, _resetSweetItemId,
     _resetCartId ,_showCustomer } from "../../actions/CustomerActions";
import CustomerService from "../../services/CustomerServices/CustomerService";
import UpdateCustomerComponent from "./UpdateCustomerComponent";
import Header from "../pages/Header";
import Footer from "../pages/Footer";

const customerService = new CustomerService();
class UpdateCustomer extends React.Component{
    
    render(){
        if (this.props.redirectToShow)
            this.props.history.push(`/customer/show/${this.props.redirectionId}`)
        return <div className = "ui container">
            <div className="ui huge header center aligned">Update Customer</div>
            <Header title="UPDATE CUSTOMER" />
            <br/>
            <UpdateCustomerComponent message = {this.props.message} customer = {this.props.customer} 
            sweetOrderIds = {this.props.sweetOrderIds} 
            onSubmit = {this.props.onSubmit} onReset = {this.props.onReset} 
            onClickRemoveSweetOrderId = {this.props.onClickRemoveSweetOrderId} 
            onClickAddSweetOrderId = {this.props.onClickAddSweetOrderId} sweetItemIds = {this.props.sweetItemIds} 
            onClickRemoveSweetItemId = {this.props.onClickRemoveSweetItemId} 
            onClickAddSweetItemId = {this.props.onClickAddSweetItemId} />
            <br/>
           <Footer></Footer>
        </div>
    }


    componentDidMount(){
        console.log("update component mounted");
        customerService.getCustomer(this.props.id,this.props.responseCallBack,this.props.catchCallBack);
    }

}

const mapStateToProps = (state,props) => {
    console.log("sweet order display"+JSON.stringify(state.customer.sweetOrderIds))
    return {
        customer : state.customer.customer,
        message : state.customer.message,
        id : props.match.params.id,
        redirectToUpdate: state.customer.redirectToUpdate,
        sweetOrderIds : state.customer.sweetOrderIds,
        sweetItemIds : state.customer.sweetItemIds

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        responseCallBack : (response) => {
            console.log("The response is "+JSON.stringify(response.data));
            dispatch(_showCustomer(response.data, ""));
            
        },
        catchCallBack : (error) => {dispatch(_showCustomer(null,error.message))},
        onSubmit : (Customer) => {
            console.log("onSubmit activated");
            const responseCallBack = (response) => dispatch(_displayMessage("Updated successfully."));
            const catchCallBack = (error) => {
                console.log("the error is :"+JSON.stringify(error));
                dispatch(_displayMessage(error.message));
            }
            customerService.updateCustomer(Customer,responseCallBack,catchCallBack );
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

export default connect(mapStateToProps,mapDispatchToProps)(UpdateCustomer);
