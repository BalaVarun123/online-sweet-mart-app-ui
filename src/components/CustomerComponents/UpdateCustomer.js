import React from "react";

import { connect } from "react-redux";
import { _addSweetOrderId,_addSweetItemId, _addCartId, _displayMessage, _redirectToUpdate, _removeSweetOrderId, _removeSweetItemId,_removeCartId,_resetSweetOrderId, _resetSweetItemId,_resetCartId ,_showCustomer } from "../../actions/CustomerActions";
import CustomerService from "../../services/CustomerServices/CustomerService";
import UpdateCustomerComponent from "./UpdateCustomerComponent";


const CustomerService = new CustomerService();
class UpdateCustomer extends React.Component{
    
    render(){
        if (this.props.redirectToUpdate){
            this.props.resetRedirection();
        }
        return <div>
            <h2>UpdateAdmin</h2>
            <br/>
            <UpdateCustomerComponent message = {this.props.message} Customer = {this.props.Customer} sweetOrderIds = {this.props.sweetOrderIds} onSubmit = {this.props.onSubmit}  onClickRemoveSweetOrderId = {this.props.onClickRemoveSweetOrderId}  onClickAddSweetOrderId = {this.props. onClickAddSweetOrderId} onReset = {this.props.onReset}/>
            <UpdateCustomerComponent message = {this.props.message} Customer = {this.props.Customer} sweetItemIds = {this.props.sweetItemIds} onSubmit = {this.props.onSubmit}  onClickRemoveSweetItemId = {this.props.onClickRemoveSweetItemId}  onClickAddSweetItemId = {this.props. onClickAddSweetItemId} onReset = {this.props.onReset}/>
            <UpdateCustomerComponent message = {this.props.message} Customer = {this.props.Customer} cartIds = {this.props.cartIds} onSubmit = {this.props.onSubmit}  onClickRemoveCartId = {this.props.onClickRemoveCartId}  onClickAddCartId = {this.props. onClickAddCartId} onReset = {this.props.onReset}/>
        </div>
    }


    componentDidMount(){
        console.log("update component mounted");
        CustomerService.getCustomer(this.props.id,this.props.responseCallBack,this.props.catchCallBack);
    }

}

const mapStateToProps = (state,props) => {
    return {
        Customer : state.Customer.Customer,
        message : state.Customer.message,
        id : props.match.params.id,
        redirectToUpdate: state.Customer.redirectToUpdate,
        sweetOrderIds : state.Customer.sweetOrderIds,
        sweetItemIds : state.Customer.sweetItemIds,
        cartIds : state.Customer.cartIds

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        responseCallBack : (response) => {
            console.log("The response is "+JSON.stringify(response.data[0]));
            if (response.data.length > 0)
            dispatch(_showCustomer(response.data[0], ""));
            else 
            dispatch(_showCustomer(null,"Invalid User Id"));

        },
        catchCallBack : (error) => {dispatch(_showCustomer(null,error.response.data))},
        onSubmit : (Customer) => {
            console.log("onSubmit activated");
            const responseCallBack = (response) => dispatch(_displayMessage("Updated successfully."));
            const catchCallBack = (error) => {
                console.log("the error is :"+JSON.stringify(error));
                dispatch(_displayMessage(error.response.data));
            }
            CustomerService.updateCustomer(Customer,responseCallBack,catchCallBack );
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
