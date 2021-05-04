import React from 'react';
import { Redirect } from 'react-router';
import UpdateCartComponent from './UpdateCartComponent';

class UpdateCart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            // cart:{

            //     cartId:0,
            //     productCount:0,
            //     total:0,
            //     grandTotal:0,
            //     listProduct:[]

            // }, 
            
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

        return <UpdateCartComponent state={this.state} setState={p => { this.setState(p) }} />
    }


}

export default UpdateCart;














































