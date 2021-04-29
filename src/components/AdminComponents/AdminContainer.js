import React from "react";
import { Link } from "react-router-dom";
import ListAdminContainer from "./ListAdminContainer";

class AdminContainer extends React.Component{
    render(){
        return <div>
            <h2>{/*this.props.title*/}</h2>
            <br/>
            <ListAdminContainer/>
        </div>
    }
}


export default AdminContainer;