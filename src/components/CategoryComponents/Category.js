import React from "react";
import { Link , Redirect} from "react-router-dom";
import ListCategory from "./ListCategory";

class Category extends React.Component{
    render(){
        return <div>
           <redirect to = "/category/get-all"/>
        </div>
    }
}


export default Category;