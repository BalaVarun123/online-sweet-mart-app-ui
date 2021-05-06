import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showAllCarts } from '../../actions/CartActions';
import CartComponent from '../CartComponents/CartComponent';
import Header from '../pages/Header';
import Footer from '../pages/Footer';


const CartList = () => {

    alert("Cart List");
    
    const carts = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchCarts = () => showAllCarts();

    useEffect(() => {

        dispatch(fetchCarts());

    }, []);

    return (
        <div>

              <Header title="WELCOME TO CART LIST" />

            <CartComponent />

            <Footer></Footer>


        </div>
    )
}

export default CartList;