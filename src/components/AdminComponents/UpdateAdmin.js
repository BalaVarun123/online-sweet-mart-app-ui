import React from "react";

import { connect } from "react-redux";
import UpdateAdminComponent from "./UpdateAdminComponent";


class UpdateAdmin extends React.Component{
    render(){
        return <div>
            <h2>UpdateAdmin</h2>
            <br/>
            <UpdateAdminComponent/>
        </div>
    }
}

export default UpdateAdmin;
