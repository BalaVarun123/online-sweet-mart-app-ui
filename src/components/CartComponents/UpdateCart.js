import React from 'react';
import { Redirect } from 'react-router';
import UpdateCartComponent from './UpdateCartComponent';
import Header from '../pages/Header';
import Footer from '../pages/Footer';


class UpdateCart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            redirectToShow: false,
            listProduct: [],
            message: "",
            cartId: -1

        }
    }
    render() {

        if (this.state.redirectToShow) {

            return <Redirect to={"/cart/show-cart-by-id/" + this.state.cartId} />
        }

        return <div>

            <Header title="UPDATE CART MODULE" />

            <UpdateCartComponent state={this.state} setState={p => { this.setState(p) }} />  <br /> <br />

            <Footer></Footer>

        </div>
    }

}

export default UpdateCart;














































