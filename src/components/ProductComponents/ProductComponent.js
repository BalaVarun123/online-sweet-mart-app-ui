import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
    const products = useSelector((state) => state.product.product);
if(products!=null){
    const renderList = products.map((product) => {
        const {productId, name,description, price, available,photoPath} = product;
        return(
            <div key={productId} className = "container" >
                <Link to={`/product/show-by-id/${productId}`}>
                     
                     <div>
                               <div>ProductId:{productId}</div> <br/>
                               <div>Name:{name}</div> <br/>
                               <div>Available: {available}</div>
                               <div>Description:{description}</div> <br/>
                               <div>Price:{price}</div> <br/>
                               <div>PhotoPath:{photoPath}</div> <br/> 

                               <br/> <br/>
                     </div>
                              
                </Link>
            </div>
        );
    });
    return <>{renderList}</>;
} else {
    return <p> please wait </p>
}
};

export default ProductComponent;