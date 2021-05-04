import React from "react";
import { Link } from "react-router-dom";
import ListOrderBill from "./ListCategory";

class Category extends React.Component{
    render(){
        return <div>
            <h2>Category</h2>
            <br/>
            <ListCategory/>
        </div>
    }
}


export default Category;