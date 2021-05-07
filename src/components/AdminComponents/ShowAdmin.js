import React from "react";

import { connect } from "react-redux";
import { _adminRedirectToUpdate, _showAdmin } from "../../actions/AdminActions";
import { ADMIN_REDIRECT_TO_UPDATE } from "../../actionTypes/AdminActionTypes";
import AdminService from "../../services/AdminServices/AdminService";
import Footer from "../pages/Footer";
import Header from "../pages/Header";
import ShowAdminComponent from "./ShowAdminComponent";

class ShowAdmin extends React.Component{


    adminService = new AdminService();

    constructor(props){
        super(props);
    }

    render(){

        if (this.props.redirectToUpdate ){
            this.props.history.push(`/admin/update/${this.props.id}`)
        }
        
        return <div className = "ui container">
            <Header title={"ADMIN RECORD FOR id = "+ this.props.id}/>
            
            <br/>
            <ShowAdminComponent admin = {this.props.admin} message = {this.props.message} onClickUpdate = {this.props.onClickUpdate} onClickDelete = {this.onClickDelete}/>
            <Footer/>
        </div>
    }

    componentDidMount(){
        this.adminService.getAdmin(this.props.id,this.props.responseCallBack,this.props.catchCallBack);
    }

    onClickDelete = () => {
        this.adminService.deleteAdmin(this.props.id,(response) => console.log("Record deleted :"+response.data), (error) => error.response.data);
        this.props.history.push("/")
    }


}


const mapStateToProps = (state,props) => {
    return {
        admin: state.admin.admin,
        id : props.match.params.id,
        processing : state.admin.processing,
        message : state.admin.message,
        redirectToUpdate : state.admin.redirectToUpdate,
        redirectToShow : state.admin.redirectToShow,
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

        onClickUpdate : () => {
            dispatch(_adminRedirectToUpdate(true));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowAdmin);