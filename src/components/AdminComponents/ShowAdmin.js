import React from "react";

import { connect } from "react-redux";
import ShowAdminComponent from "./ShowAdminComponent";

class ShowAdmin extends React.Component{
    render(){
        return <div>
            <h2>ShowAdmin</h2>
            <br/>
            <ShowAdminComponent/>
        </div>
    }
}
export default ShowAdmin;