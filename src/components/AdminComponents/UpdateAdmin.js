import React from "react";

import { connect } from "react-redux";
import { _adminRedirectToUpdate, _showAdmin, _updateAdmin } from "../../actions/AdminActions";
import AdminService from "../../services/AdminServices/AdminService";
import Footer from "../pages/Footer";
import Header from "../pages/Header";
import UpdateAdminComponent from "./UpdateAdminComponent";

let adminService = new AdminService();
class UpdateAdmin extends React.Component{
    render(){
        if (this.props.redirectToUpdate ){
            this.props.resetRedirection();
        }
        return <div className = "ui container">
            <Header title={"UPDATE ADMIN RECORD FOR id = "+ this.props.id}/>
            <br/>
            <UpdateAdminComponent admin = {this.props.admin} message = {this.props.message} onSubmit = {this.props.onSubmit}/>
            <Footer/>
        </div>
    }

    componentDidMount(){
        if (!this.props.admin){
            adminService.getAdmin(this.props.id,this.props.responseCallBack,this.props.catchCallBack);
        }
    }
}


const mapStateToProps = (state,props) => {
    return {
        admin: state.admin.admin,
        id : props.match.params.id,
        processing : state.admin.processing,
        message : state.admin.message,
        redirectToUpdate : state.admin.redirectToUpdate
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        responseCallBack : (response) => {
            let data = response.data;
            if (data.length > 0)
            dispatch(_showAdmin(response.data[0],false,""));
            else 
            dispatch(_showAdmin(null,false,"Ivalid admin ID."))
        },
        catchCallBack  : (error) => {
            dispatch(_showAdmin(null,false,error.response.data));
        },
        resetRedirection : () => dispatch(_adminRedirectToUpdate(false)),
        onSubmit : (admin) => {
            const responseCallBack  = (response) => dispatch(_updateAdmin(response.data, "Updated Sucessfully."));
            const catchCallBack = (error) => dispatch(_updateAdmin(null,error.response.data));
            adminService.updateAdmin(admin,responseCallBack,catchCallBack);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateAdmin);
