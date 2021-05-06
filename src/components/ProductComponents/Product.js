import React from "react";
import { Redirect } from "react-router-dom";

class Product extends React.Component{
    render(){
        return <div>
            <Redirect to =  "/product/show-all"/>
        </div>
    }
}


export default Product;