import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartComponent = () => {
    const carts = useSelector((state) => state.cartReducer.carts);

    const renderList = carts.map((cart) => {
        const {cartId, productCount, total, grandTotal} = cart;
        return(
            <div className="four wide coloumn" key={cartId}>
                <Link to={`/cart/show-cart-by-id/${cartId}`}>
                    <div className="ui link cards">
                        <div classname="card">
                            <div className="content">
                               <div className="header">{productCount}</div> 
                               <div className="meta">{total}</div>
                               <div className="meta">{grandTotal}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    });
    return <>{renderList}</>;
};

export default CartComponent;