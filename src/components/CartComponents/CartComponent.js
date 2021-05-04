import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'


const CartComponent = () => {
    const carts = useSelector((state) => state.cartReducer.carts);
if(carts!=null){
    const renderList = carts.map((cart) => {
        const {cartId, productCount, total, grandTotal} = cart;
        return(
            <div key={cartId} className = "container" >
                <Link to={`/cart/show-cart-by-id/${cartId}`}>
                     
                     <div class = "row-sm-4">
                               <div  class="list-group-item active">CartId:{cartId}</div> <br/>
                               <div class="list-group-item list-group-item-warning">ProductCount:{productCount}</div> <br/>
                               <div class="list-group-item list-group-item-danger">Total:{total}</div> <br/>
                               <div class="list-group-item list-group-item-info">GrandTotal:{grandTotal}</div> <br/>

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

export default CartComponent;