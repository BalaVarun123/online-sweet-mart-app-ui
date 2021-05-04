import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductService from '../../services/ProductServices/ProductServices';
import ProductComponent from './ProductComponent.js';


const ProductList = () => {
    
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = () => ProductService.getAllProducts();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    console.log("Products : ", products);

    return (
        <div>
            <ProductComponent />
        </div>
    )
}

export default ProductList;