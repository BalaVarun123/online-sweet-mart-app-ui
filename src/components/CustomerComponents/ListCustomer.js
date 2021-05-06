import React from "react";
import { connect } from "react-redux";
import { _displayMessage, _redirectToUpdate, _showAllCustomer } from "../../actions/CustomerActions";
import CustomerService from "../../services/CustomerServices/CustomerService";
import ListCustomerComponent from "./ListCustomerComponent";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
const  customerService = new CustomerService();
class ListCustomer extends React.Component{
   
    render(){
        if (this.props.redirectToUpdate)
        this.props.history.push(`/customer/update/${this.props.redirectionId}`)
        return <div className = "ui container">
             <Header title="CUSTOMER LIST" />
            <br/>
           
            <ListCustomerComponent customerList = {this.props.customerList} message = {this.props.message} onClickUpdate = {this.props.onClickUpdate} onClickDelete = {this.props.onClickDelete}/>
            <br/>
           <Footer></Footer>
        </div>
    }

    componentDidMount(){
        customerService.getAllCustomers(this.props.loadResponseCallBack ,this.props.loadCatchCallBack)
    }


    


}
const mapStatesToProps = (state, props) => {
    return {
        customerList : state.customer.customerList,
        message : state.customer.message,
        redirectToUpdate : state.customer.redirectToUpdate,
        redirectionId : state.customer.redirectionId
    }
}

const mapDispatchToProps = (dispatch) =>{
    const loadResponseCallBack = (response) => {dispatch(_showAllCustomer(response.data))};
    const loadCatchCallBack = (error) => dispatch(_showAllCustomer([], "Could not retrieve data."));
    const deleteResponseCallBack =  (response) => {
        dispatch(_displayMessage("Record deleted."));
        customerService.getAllCustomers(loadResponseCallBack,loadCatchCallBack)
        }
    const deleteCatchCallBack = (error) => dispatch(_displayMessage(error.response.data));
    return {
        loadResponseCallBack : loadResponseCallBack,
        loadCatchCallBack : loadCatchCallBack,
        onClickDelete : (id) => {
            customerService.deleteCustomer(id,deleteResponseCallBack,deleteCatchCallBack );
        },
        onClickUpdate : (id) => {
            dispatch(_redirectToUpdate(true,id));
        }
    }
}

export default connect(mapStatesToProps,mapDispatchToProps)(ListCustomer);