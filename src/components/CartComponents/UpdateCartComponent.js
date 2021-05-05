import CartServices from "../../services/CartServices/CartService";
import React from 'react';


class UpdateCartComponent extends React.Component {

    cartIdRef = React.createRef();
    productCountRef = React.createRef();
    totalRef = React.createRef();
    grandTotalRef = React.createRef();
    productListRef = React.createRef();
    productIdElements = []
    productIdTags = []

    cartServices = new CartServices();
    render() {

        this.renderProductIds();

        return (
            <div class="ui two column stackable center aligned page grid" >
                <p> {this.props.state.message} </p>
                <form onSubmit={this.onSubmit} onReset={this.onReset} class="ui form" class="ui twelve wide column form segment">


                    <div class="list-group-item list-group-item-danger"  >

                        <div class="field" >
                            <i class="shopping cart icon"></i>
                            <label class="ui red circular label">  CARTID:  </label>
                            <input type="number" step="1" min="0" ref={this.cartIdRef} />
                        </div>


                        <div class="field" >
                            <label class="ui olive label"> ADD PRODUCT ID: </label>
                            <input type="number" step="1" min="0" ref={this.productListRef} /> <br />
                        </div>


                        <div class="field">
                            <i class="sistrix icon"> </i>
                            <label class="ui teal label"> PRODUCT COUNT: </label>
                            <input type="number" step="1" min="0" ref={this.productCountRef} /> <br />
                        </div>

                        <div class="field" >
                            <i class="money bill alternate outline icon"></i>
                            <label class="ui purple label"> TOTAL: </label>
                            <input type="number" step="0.01" min="0" ref={this.totalRef} /> <br />
                        </div>


                        <div class="field" >
                            <i class="dollar sign icon"></i>
                            <label class="ui pink label"> GRAND TOTAL: </label>
                            <input type="number" step="0.01" min="0" ref={this.grandTotalRef} />
                            {this.productIdTags} <br />
                        </div>

                    </div>

                    <br />  <br />

                    <button class="ui positive button" type="button" onClick={this.onClickAddProduct} > ADD </button>
                    <button class="ui primary button" type="submit" > SUBMIT </button>
                    <button class="negative ui button" type="reset" > RESET </button>

                </form>
            </div>
        )
    }

    onSubmit = (event) => {

        event.preventDefault();

        let cart = {}


        cart.cartId = this.cartIdRef.current.value;
        cart.productCount = this.productCountRef.current.value;
        cart.total = this.totalRef.current.value;
        cart.grandTotal = this.grandTotalRef.current.value;
        cart.listProduct = this.productIdElements;
        console.log("checking today: " + cart.listProduct)

        this.cartServices.addCart(cart, this.responseCallback, this.errorCallback);

    }

    onClickAddProduct = () => {

        this.productIdElements.push(this.productListRef.current.value)

        this.props.setState({ listProduct: this.productIdElements })
    }

    responseCallback = (response) => {

        alert("Cart Updated");

        this.props.setState({ redirectToShow: true, cartId: response.data.cartId })


    }

    errorCallback = (error) => {

        this.props.setState({ message: error.response.data })


    }

    renderProductIds = () => {

        this.productIdTags = this.props.state.listProduct.map(

            (productId, index) => <div key={productId}> {productId} <button type="button" onClick={this.onClickRemoveProductId.bind(this, index)}>REMOVE</button></div>


        )
    }

    onClickRemoveProductId = (index, event) => {

        this.productIdElements.splice(index, 1)

        this.props.setState({ listProduct: this.productIdElements })


    }

    onReset = () => {

        this.productIdElements = []

        this.props.setState({ listProduct: this.productIdElements, message: "" })

    }

}

export default UpdateCartComponent;

























// class="ui two column stackable center aligned page grid"






























































