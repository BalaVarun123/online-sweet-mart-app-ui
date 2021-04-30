import React from "react";

import { connect } from "react-redux";
import { _showAdmin } from "../../actions/AdminActions";
import AdminService from "../../services/AdminServices/AdminService";
import ShowAdminComponent from "./ShowAdminComponent";

class ShowAdmin extends React.Component{


    

    render(){
        return <div>
            <h2>ShowAdmin</h2>
            <br/>
            <p>{this.props.message}</p>
            <ShowAdminComponent admin = {this.props.admin}/>
        </div>
    }

    componentDidMount(){
        if (!this.props.admin){
            let adminService = new AdminService();
            adminService.getAdmin(this.props.id,this.props.responseCallBack,this.props.catchCallBack);
        }
    }



}


const mapStateToProps = (state,props) => {
    
    return {
        admin: state.admin.admin,
        id : props.match.params.id,
        processing : state.admin.processing
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        responseCallBack : (response) => {
            console.log("+++");
            console.log("response :"+JSON.stringify(response));
            let data = response.data;
            if (data.length > 0)
            dispatch(_showAdmin(response.data[0],false,""));
            else 
            dispatch(_showAdmin(null,false,"Ivalid admin ID."))
        },
        catchCallBack  : (error) => {
            console.log("****");
            console.log("error :"+JSON.stringify(error));
            dispatch(_showAdmin(null,false,error.response.data));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowAdmin);