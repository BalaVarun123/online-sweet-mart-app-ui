import React from "react";
import { connect } from "react-redux";
import { _adminRedirectToUpdate, _showAllAdmins } from "../../actions/AdminActions";
import AdminService from "../../services/AdminServices/AdminService";
import ListAdminComponent from "./ListAdminComponent";



class ListAdmin extends React.Component{
    adminService = new AdminService();
    render(){
        if (this.props.redirectToUpdate)
        this.props.history.push(`/admin/update/${this.props.redirectionId}`)
        return <div>
            <ListAdminComponent adminList = {this.props.adminList} message = {this.message} onClickUpdate = {this.props.onClickUpdate}/>
        </div>
    }


    componentDidMount(){
        if (!this.props.adminList){
            this.adminService.getAllAdmins(this.props.responseCallBack,this.props.catchCallBack);
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
    return {
        onClickUpdate : (id) => {
            dispatch(_adminRedirectToUpdate(true,id));
        },
        responseCallBack : (response) => {
            dispatch(_showAllAdmins(response.data),"")
        },
        catchCallBack : (error) => {
            console.log("Could not retrieve data.");
            dispatch(_showAllAdmins([], "Could not retrieve data."));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListAdmin);