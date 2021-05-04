import axios from '../../axios/axios';

const CART_URL_ADD = "/add-cart"
const CART_URL_UPDATE = "/update-cart"
const PRODUCT_URL_GET = "/product/show-by-id/"


export default class CartServices {


    //ADD

    async addCart(cart, responseCallback, errorCallback) {

        let cartOne = { productCount: cart.productCount, total: cart.total, grandTotal: cart.grandTotal }

        let products = [];

        let productsJSON = {};

        let invalidProudctIdFound = false;

        console.log("it should work :" + cart.listProduct)

        for (let productId of cart.listProduct) {

            await axios.get(PRODUCT_URL_GET + productId)
                .then((response) => productsJSON[response.data.productId] = response.data)
                .catch((error) => invalidProudctIdFound = true)

        }

        if (invalidProudctIdFound) {

            errorCallback({ response: { data: "Invalid product ID" } })
        }
        else {

            console.log("no time left" + JSON.stringify(productsJSON));

            for (let key in productsJSON) {

                products.push(productsJSON[key])
            }

            cartOne.listProduct = products;

            axios.post(CART_URL_ADD, cartOne)
                .then(responseCallback)
                .catch(errorCallback)
        }

    }


    //UPDATE

    async updateCart(cart, responseCallback, errorCallback) {

        let cartOne = { cartId: cart.cartId, productCount: cart.productCount, total: cart.total, grandTotal: cart.grandTotal }

        let products = [];

        let productsJSON = {};

        let invalidProudctIdFound = false;

        for (let productId of cart.listProduct) {


            await axios.get(PRODUCT_URL_GET + productId)
                .then((response) => productsJSON[response.data.productId] = response.data)
                .catch((error) => invalidProudctIdFound = true)


        }

        if (invalidProudctIdFound) {

            errorCallback({ response: { data: "Invalid product ID" } })
        }
        else {

            for (let key in productsJSON) {

                products.push(productsJSON[key])
            }

            cartOne.listProduct = products;

            axios.put(CART_URL_UPDATE, cartOne)
                .then(responseCallback)
                .catch(errorCallback)
        }

    }
}