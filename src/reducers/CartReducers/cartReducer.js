import { CartActionTypes } from '../../actionTypes/CartActionTypes';

// const initialState = {

//     cart:[],
//     carts:[],
//     isAdded:false,
//     isUpdated:false
// };

const cartReducer = (state=[],action)=>{

    switch (action.type){
        case CartActionTypes.ADD_CART:
       // return{...state, newcart:action.payload, isAdded:true}
       return [...state, action.cart]
        
        case CartActionTypes.UPDATE_CART:
       // return{...state, carts:action.payload, isUpdated:true}
       return [...state, action.cart]

        case CartActionTypes.CANCEL_CART:
        //return{...state, cart:action.carts}
        return[...state, action.cart]

        case CartActionTypes.SHOW_CART_BY_ID:
       // return{...state, cart:action.carts}
       return action.cart

        case CartActionTypes.SHOW_ALL_CARTS:
       // return{...state, carts:action.carts }
       return action.carts

        default:
            return state;

    }
}

export default cartReducer;