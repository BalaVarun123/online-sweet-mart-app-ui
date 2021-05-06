import React from 'react';
import AddCartComponent from './AddCartComponent';
import { Redirect } from 'react-router';

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

        return <AddCartComponent state={this.state} setState={p => { this.setState(p) }} />
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
























