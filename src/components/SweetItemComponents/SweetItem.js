import React from "react";
import { Link, Redirect } from "react-router-dom";
import ListSweetItem from "./ListSweetItem";

class SweetItem extends React.Component{
    render(){
        return <div>
            <Redirect to =  "/sweet-item/show-all"/>
        </div>
    }
}


export default SweetItem;