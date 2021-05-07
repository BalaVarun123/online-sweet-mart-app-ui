import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { _addAdmin } from "../../actions/AdminActions";
import AdminService from "../../services/AdminServices/AdminService";
import Footer from "../pages/Footer";
import Header from "../pages/Header";
import AddAdminComponent from "./AddAdminComponent";

const adminService = new AdminService()

class AddAdmin extends React.Component{
    render(){
        if (this.props.redirectToShow ){
            this.props.history.push(`/admin/show/${this.props.id}`)
        }
        return <div className = "ui container">
           <Header title={"ADD NEW ADMIN RECORD"}/>
            <AddAdminComponent onSubmit = {this.props.onSubmit} message = {this.props.message}/>
            <Footer/>
        </div>
    }
}

const mapStateToProps = (state,props) => {
    return {
        id : (state.admin.admin)?state.admin.admin.id:0,
        message : state.admin.message,
        redirectToShow : state.admin.redirectToShow
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit : (admin) => {
            let responseCallBack = (response) => { dispatch(_addAdmin(response.data,"Details added.",true));};
            let catchCallBack = (error) => {dispatch(_addAdmin(null,"Could not add the details.",false)); console.log(error.response.data);};
            adminService.addAdmin(admin, responseCallBack,catchCallBack);
        }
    }
}

export default connect( mapStateToProps,mapDispatchToProps)(AddAdmin);