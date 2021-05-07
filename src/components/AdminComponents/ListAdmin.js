import React from "react";
import { connect } from "react-redux";
import { _adminRedirectToUpdate, _displayMessage, _showAllAdmins } from "../../actions/AdminActions";
//import { _displayMessage } from "../../actions/OrderBillActions";
import AdminService from "../../services/AdminServices/AdminService";
import Footer from "../pages/Footer";
import Header from "../pages/Header";
import ListAdminComponent from "./ListAdminComponent";


const adminService = new AdminService();
class ListAdmin extends React.Component{
    
    render(){
        if (this.props.redirectToUpdate)
        this.props.history.push(`/admin/update/${this.props.redirectionId}`)
        return <div className = "ui container">
             <Header title="ALL ADMIN RECORDS" />
            <ListAdminComponent adminList = {this.props.adminList} message = {this.message} onClickUpdate = {this.props.onClickUpdate} onClickDelete = {this.props.onClickDelete}/>
            <Footer/>
        </div>
    }


    componentDidMount(){
        if (!this.props.adminList){
            adminService.getAllAdmins(this.props.responseCallBack,this.props.catchCallBack);
        }
    }
}

const mapStateToProps = (state, props) => {
    return {
        adminList : state.admin.adminList,
        message: state.admin.message,
        redirectToUpdate : state.admin.redirectToUpdate,
        redirectionId : state.admin.redirectionId
    };
}

const mapDispatchToProps = (dispatch) => {
    const getAllResponseCallBack = (response) => {
        dispatch(_showAllAdmins(response.data),"")
    };
    const getAllCatchCallBack = (error) => {
        console.log("Could not retrieve data.");
        dispatch(_showAllAdmins([], "Could not retrieve data."));
    };
    const deleteResponseCallBack =  (response) => {
        dispatch(_displayMessage("Record deleted."));
        adminService.getAllAdmins(getAllResponseCallBack,getAllCatchCallBack);
        };
    const deleteCatchCallBack = (error) => dispatch(_displayMessage(error.response.data));
    return {
        onClickUpdate : (id) => {
            dispatch(_adminRedirectToUpdate(true,id));
        },
        responseCallBack : getAllResponseCallBack,
        catchCallBack : getAllCatchCallBack,
        onClickDelete : (id) => {
            adminService.deleteAdmin(id,deleteResponseCallBack,deleteCatchCallBack );
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListAdmin);