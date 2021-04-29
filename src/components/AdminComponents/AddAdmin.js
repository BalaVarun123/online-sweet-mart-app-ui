import React from "react";
import { connect } from "react-redux";
import AddAdminComponent from "./AddAdminComponent";
class AddAdmin extends React.Component{
    render(){
        return <div>
            <h2>Admin</h2>
            <br/>
            <AddAdminComponent/>
        </div>
    }
}

export default AddAdmin;