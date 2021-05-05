import { CartActionTypes } from '../../actionTypes/CartActionTypes';

const initialState = {
    cart: null,
    carts: null
};

const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case CartActionTypes.ADD_CART:
            return { ...state, newcart: action.payload, isAdded: true }


        case CartActionTypes.UPDATE_CART:
            return { ...state, carts: action.payload, isUpdated: true }


        case CartActionTypes.CANCEL_CART:
            return { ...state, cart: action.carts }


        case CartActionTypes.SHOW_CART_BY_ID:
            return { ...state, cart: action.cart }


        case CartActionTypes.SHOW_ALL_CARTS:
            console.log('reducer show all')
            return { ...state, carts: action.carts }


        default:
            return state;

    }
}

export default cartReducer;