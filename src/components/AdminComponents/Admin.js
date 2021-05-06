import React from "react";
import { Link, Redirect } from "react-router-dom";
import ListAdmin from "./ListAdmin";

class Admin extends React.Component{
    render(){
        return <div>
            <Redirect to = "/admin/show-all"/>
        </div>
    }
}


export default Admin;