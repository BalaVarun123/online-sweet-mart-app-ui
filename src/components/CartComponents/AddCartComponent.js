import CartServices from "../../services/CartServices/CartService";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


class AddCartComponent extends React.Component {

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

            <div class="ui column stackable center page grid">

                <br />

                <div class="three wide column"></div>

                <form onSubmit={this.onSubmit} onReset={this.onReset} class="ui form" className="ui ten wide column form segment">


                    <br />


                    <div className="field">
                        <i class="plus square icon"></i>
                        <label> PRODUCT ID: </label>
                        <input type="number" step="1" min="0" ref={this.productListRef}   required  title="Enter Valid Product ID" placeholder = "Enter Product ID"/> <br />
                    </div>


                    <div className="field">
                        <i class="sistrix icon"> </i>
                        <label> PRODUCT COUNT: </label>
                        <input type="number" step="1" min="0" ref={this.productCountRef} placeholder = "Enter Your Product Count"/> <br />
                    </div>

                    <div className="field">
                        <i class="money bill alternate outline icon"></i>
                        <label> TOTAL: </label>
                        <input type="number" step="0.01" min="0" ref={this.totalRef} required placeholder = "Tax Exclusive"/> <br />
                    </div>


                    <div className="field">
                        <i class="rupee sign icon"></i>
                        <label> GRAND TOTAL: </label>
                        <input type="number" step="0.01" min="0" ref={this.grandTotalRef} required placeholder = "Total Amount Including TAX"/>
                        {this.productIdTags} <br />
                    </div>

                    <p> {this.props.state.message} </p>
                    
                    <button class="ui positive button" type="button" onClick={this.onClickAddProduct} > ADD PRODUCT </button>
                    <button class="ui primary button" type="submit" > SUBMIT </button>
                    <button class="negative ui button" type="reset" > RESET </button>

                </form>

            </div>

        )
    }

    onSubmit = (event) => {

        event.preventDefault();

        let cart = {}

        cart.productCount = this.productCountRef.current.value;
        cart.total = this.totalRef.current.value;
        cart.grandTotal = this.grandTotalRef.current.value;
        cart.listProduct = this.productIdElements;

        this.cartServices.addCart(cart, this.responseCallback, this.errorCallback);

    }

    onClickAddProduct = () => {

        this.productIdElements.push(this.productListRef.current.value)

        this.props.setState({ listProduct: this.productIdElements })
    }

    responseCallback = (response) => {

        alert("Cart Added");

        this.props.setState({ redirectToShow: true, cartId: response.data.cartId })


    }

    errorCallback = (error) => {

        this.props.setState({ message: error.response.data })


    }

    renderProductIds = () => {

        this.productIdTags = this.props.state.listProduct.map(

            (productId, index) => <div key={productId}> {productId} <button class="ui inverted red button" type="button" onClick={this.onClickRemoveProductId.bind(this, index)}>REMOVE</button></div>


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

export default AddCartComponent;

























































