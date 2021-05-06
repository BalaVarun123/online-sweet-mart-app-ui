import { CartActionTypes } from '../actionTypes/CartActionTypes';
import axios from 'axios';

export const addCartSuccess = (cart) => {

    return {

        type: CartActionTypes.ADD_CART,
        payload: cart

    }
}

export const updateCartSuccess = (cart) => {

    return {

        type: CartActionTypes.UPDATE_CART,
        payload: cart

    }
}

const cancelCartSuccess = (cart) => {

    return {

        type: CartActionTypes.CANCEL_CART,
        payload: cart

    }
}

export const cancelCart = (cartId) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        //return Axios.delete(apiUrl + '/delete-cart'+cartId)
        return axios.delete("http://localhost:9191/api/osm/cart/delete-cart" + cartId)
            .then(resp => {
                // Dispatch another action
                // to consume data              
                dispatch(cancelCartSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const showCartByIdSuccess = (cart) => {

    return {

        type: CartActionTypes.SHOW_CART_BY_ID,
        cart

    }
}

export const showCartById = (cartId) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time

    return (dispatch) => {
        // Returns a promise

        return axios.get("http://localhost:9191/api/osm/show-cart-by-id/" + cartId)
            .then(resp => {

                // Dispatch another action
                // to consume data              
                dispatch(showCartByIdSuccess(resp.data))
            })
            .catch(error => {

                throw (error);
            });
    };
};

export const showAllCartsSuccess = (carts) => {

    return {

        type: CartActionTypes.SHOW_ALL_CARTS,
        carts

    }
}

export const showAllCarts = () => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return axios.get("http://localhost:9191/api/osm/show-all-carts")
            //return axios.get(apiUrl + "/show-all-carts")
            .then(resp => {
                // Dispatch another action
                // to consume data         
                console.log(resp.data)
                dispatch(showAllCartsSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};