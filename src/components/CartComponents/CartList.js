import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showAllCarts } from '../../actions/CartActions';
import CartComponent from '../CartComponents/CartComponent';


const CartList = () => {

    alert("Cart List");
    
    const carts = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchCarts = () => showAllCarts();

    useEffect(() => {

        dispatch(fetchCarts());

    }, []);

    console.log("Carts : ", carts);

    return (
        <div>
            <CartComponent />
        </div>
    )
}

export default CartList;