import React from "react";

import { connect } from "react-redux";
import ShowCustomerComponent from "./ShowCustomerComponent";
import {_displayMessage, _redirectToShow, _redirectToUpdate, _showCustomer} from "../../actions/CustomerActions";
import CustomerService from "../../services/CustomerServices/CustomerService";

const customerService = new CustomerService();;
class ShowCustomer extends React.Component{

    

    render(){
        if (this.props.redirectToUpdate){
            this.props.history.push(`/customer/update/${this.props.id}`)
        }
        if (this.props.redirectToShow){
            this.props.resetRedirection();
        }
        return <div>
            <h2>Show Order Bill</h2>
            <br/>
            <ShowCustomerComponent message = {this.props.message} customer = {this.props.customer} sweetOrderIds = {this.props.sweetOrderIds} 
            onSubmit = {this.props.onSubmit} onReset = {this.props.onReset} onClickRemoveSweetOrderId = {this.props.onClickRemoveSweetOrderId} 
            onClickAddSweetOrderId = {this.props.onClickAddSweetOrderId} sweetItemIds = {this.props.sweetItemIds} 
            onSubmit = {this.props.onSubmit} onReset = {this.props.onReset} onClickRemoveSweetItemId = {this.props.onClickRemoveSweetItemId} 
            onClickAddSweetItemId = {this.props.onClickAddSweetItemId} cartIds = {this.props.cartIds} 
            onSubmit = {this.props.onSubmit} onReset = {this.props.onReset} onClickRemoveCartId = {this.props.onClickRemoveCartId} 
            onClickAddCartId = {this.props.onClickAddCartId}/>
        </div>
    }


    componentDidMount(){
        customerService.getCustomer(this.props.id,this.props.responseCallBack,this.props.catchCallBack);
    }

    onClickDelete = (id) => {
        customerService.deleteCustomer(id);
        this.props.history.push("/");
    }

}

const mapStateToProps = (state,props) => {
    return {
        customer : state.customer.customer,
        message : state.customer.message,
        id : props.match.params.id,
        redirectToUpdate: state.customer.redirectToUpdate,
        redirectToShow : state.customer.redirectToShow
    }

}
const mapDispatchToProps = (dispatch) => {
    return {

        onClickUpdate : () => {dispatch(_redirectToUpdate(true))},
        onClickViewSweetOrder : () => {},
        onClickViewSweetItem : () => {},
        onClickViewCart : () => {},
        responseCallBack : (response) => {
            if (response.data.length > 0)
            dispatch(_showCustomer(response.data[0], ""))
            else 
            dispatch(_showCustomer(null,"Invalid Order Bill Id"))
        },
        catchCallBack : (error) => {dispatch(_showCustomer(null,error.response.data))},
        resetRedirection : () => {dispatch(_redirectToShow(false))}
    }
   

}
export default connect(mapStateToProps,mapDispatchToProps)(ShowCustomer); 