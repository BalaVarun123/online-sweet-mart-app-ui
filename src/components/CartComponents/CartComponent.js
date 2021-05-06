import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const CartComponent = () => {
    const carts = useSelector((state) => state.cartReducer.carts);
    if (carts != null) {
        const renderList = carts.map((cart) => {
            const { cartId, productCount, total, grandTotal } = cart;

            return (
                <tr key={cartId}>
                    <td class="center aligned"> {cartId} </td>
                    <td class="center aligned"> {productCount} </td>
                    <td class="center aligned"> {total} </td>
                    <td class="center aligned"> {grandTotal} </td>

                    <Link to={`/cart/show-cart-by-id/${cartId}`}>
                        <i class="shopping cart icon " ></i> SHOW PRODUCT IN CART

    </Link>

                </tr>

            )

        })

        return (


            <div className="container" >
       <div class="ui purple label" >
                <Link to={`/cart/update-cart`}>
                <i class="shopping cart icon " ></i> UPDATE CART

    </Link>

    </div>


                <table class="ui red table"  >
                    <thead>
                        <tr >
                            <th className="center aligned" > CART ID </th>
                            <th className="center aligned"> PRODUCT COUNT </th>
                            <th className="center aligned"> TOTAL </th>
                            <th className="center aligned"> GRAND TOTAL </th>
                            <th className="center aligned" class="center aligned" class="ui olive label"> ACTION </th>
                        </tr>
                    </thead>

                    <tbody>

                        {renderList}

                    </tbody>

                </table>

            </div>


        );

        // return <>{renderList}</>;

    }
    else {
        return <p> please wait </p>
    }
};



export default CartComponent;