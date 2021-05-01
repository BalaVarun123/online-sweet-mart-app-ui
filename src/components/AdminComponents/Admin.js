import React from "react";
import { Link } from "react-router-dom";
import ListAdmin from "./ListAdmin";

class Admin extends React.Component{
    render(){
        return <div>
            <h2>Admin</h2>
            <br/>
            <ListAdmin/>
        </div>
    }
}


export default Admin;