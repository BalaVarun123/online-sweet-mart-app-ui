import React from "react";
import ProductList from './ProductList';

class Product extends React.Component{
    render(){
        return <div>
            <h2>Product</h2>
            <br/>
            <ProductList/>
        </div>
    }
}


export default Product;