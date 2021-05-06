import React from 'react';
import AddCartComponent from './AddCartComponent';
import { Redirect } from 'react-router';
import Header from '../pages/Header';
import Footer from '../pages/Footer';

class AddCart extends React.Component {

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

            <Header title="ADD CART MODULE" />

            <AddCartComponent state={this.state} setState={p => { this.setState(p) }} />  <br /> <br />

            <Footer></Footer>

        </ div >
    }


}

export default AddCart;






















// cart:{

            //     cartId:0,
            //     productCount:0,
            //     total:0,
            //     grandTotal:0,
            //     listProduct:[]

            // }, 
























