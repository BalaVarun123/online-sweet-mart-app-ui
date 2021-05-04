import {ProductActionTypes} from '../../actionTypes/ProductActionTypes';
// const initialState = {
//     productID : null,
//     name : null,
    
// }
 const productReducer=(state=[],action)=>{
    switch (action.type) {
        
        case ProductActionTypes.ADD_PRODUCT:
            return [...state, action.product]
            
        case ProductActionTypes.REMOVE_SELECTED_PRODUCT:
            return[...state,action.product]
            
        case ProductActionTypes.UPDATE_PRODUCT:
            return[...state,action.product]
        
        case ProductActionTypes.SHOW_ALL_PRODUCTS:
            return action.products
            
        case ProductActionTypes.SHOW_SELECTED_PRODUCT:
            return action.product
            
        default:
            return state;
            
    }
}
export default productReducer;