import React from "react";
import { Link } from "react-router-dom";
import ListSweetItem from "./ListSweetItem";

class SweetItem extends React.Component{
    render(){
        return <div>
            <h2>SweetItem</h2>
            <br/>
            <ListSweetItem/>
        </div>
    }
}


export default SweetItem;