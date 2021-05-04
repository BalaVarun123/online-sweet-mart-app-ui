import { CartActionTypes } from '../actionTypes/CartActionTypes';
import axios from 'axios';

//const apiUrl = 'http://localhost:9191/api/osm/cart';

 const addCartSuccess = (cart) => {

    return {

        type: CartActionTypes.ADD_CART,
        payload: cart

    }
}

export const addCart = cart => {
    return (dispatch) =>{
        console.log("addcart");
        console.log(cart);
        return axios.post("http://localhost:9191/api/osm/cart/add-cart",cart).then(result=>{
            console.log(result.data);
           // User.login(result.data);    
            dispatch(addCartSuccess(result.data))
            }
        );    
    }
}

// export const addCart = (payload) => {
//     let data = {
//        cartId:payload.cartId,
//        productCount:payload.productCount,
//        total:payload.total,
//        grandTotal:payload.grandTotal,
//        productId:payload.productId,
//        productName:payload.productName,
//        price:payload.price,
//        description:payload.description,
//        available:payload.available,
//        photopath:payload.photopath,
//        categoryId:payload.categoryId,
//        categoryName:payload.categoryName

//     }
//     return (dispatch) => {
//         return Axios.post(apiUrl + "/add-cart", data)
//             .then(response => {
//                 dispatch(addCartSuccess(response.data))
//             })
//         .catch(error => {
//             throw (error);
//         });
//     };
// };

export const updateCartSuccess = (cart) => {

    return {

        type: CartActionTypes.UPDATE_CART,
        payload: cart

    }
}

// export const updateCart = (payload,cartId) => {
//     let data = {
//         cartId:payload.cartId,
//         productCount:payload.productCount,
//         total:payload.total,
//         grandTotal:payload.grandTotal,
//         productId:payload.productId,
//         productName:payload.productName,
//         price:payload.price,
//         description:payload.description,
//         available:payload.available,
//         photopath:payload.photopath,
//         categoryId:payload.categoryId,
//         categoryName:payload.categoryName
//     }
   
//     return (dispatch) => {
//         return Axios.put(apiUrl + "/update-cart"+cartId,data)
//             .then(response => {
//                 dispatch(updateCartSuccess(response.data))
//             })
//         .catch(error => {
//             throw (error);
//         });
//     };
// };

const cancelCartSuccess = (cart) => {

    return {

        type: CartActionTypes.CANCEL_CART,
        payload:cart
      
    }
}

export const cancelCart = (cartId) => {
    // Returns a dispatcher function
    // that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        //return Axios.delete(apiUrl + '/delete-cart'+cartId)
        return axios.delete("http://localhost:9191/api/osm/cart/delete-cart" +cartId)
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
    console.log("first console")
    return (dispatch) => {
        // Returns a promise
        console.log("hi")
        return axios.get("http://localhost:9191/api/osm/show-cart-by-id/"+cartId)
            .then(resp => {
                console.log("checking api")
                // Dispatch another action
                // to consume data              
                dispatch(showCartByIdSuccess(resp.data))
            })
            .catch(error => {
                console.log("catch statement")
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
               // document.write(resp.data)   
                dispatch(showAllCartsSuccess(resp.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};