import {ProductActionTypes} from '../../actionTypes/ProductActionTypes';
const initialState = {
    product: null,
    products: null
    
};
 const productReducer=(state=initialState,action)=>{
    switch (action.type) {
        
        case ProductActionTypes.ADD_PRODUCT:
            return{...state, newproduct:action.payload}
            
        case ProductActionTypes.REMOVE_SELECTED_PRODUCT:
            return{...state, product:action.products}
            
        case ProductActionTypes.UPDATE_PRODUCT:
            return[...state,action.product]
        
        case ProductActionTypes.SHOW_ALL_PRODUCTS:
            return{...state, products:action.products }    
        
            
        case ProductActionTypes.SHOW_SELECTED_PRODUCT:
            return{...state, product:action.product}
            
        default:
            return state;
            
    }
}
export default productReducer;