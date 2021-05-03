import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {showAllCarts} from '../../actions/CartActions';
import CartComponent from '../CartComponents/CartComponent';


const CartList = () => {
    alert("Cart List");
    const carts = useSelector((state) => state);

    const fetchCarts = () => showAllCarts();  

    useEffect(() => {
        fetchCarts();
    }, []);
    
    console.log("Carts : ", carts);

    return(
        <div className="ui grid container">
            <CartComponent/>
        </div>
    )
}

export default CartList;