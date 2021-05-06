// import {ProductActionTypes} from '../../actionTypes/ProductActionTypes';
// const initialState = {
//     product: null,
//     products: null
    
// };
//  const productReducer=(state=initialState,action)=>{
//     switch (action.type) {
        
//         case ProductActionTypes.ADD_PRODUCT:
//             return{...state, newproduct:action.payload}
            
//         case ProductActionTypes.REMOVE_SELECTED_PRODUCT:
//             return{...state, product:action.products}
            
//         case ProductActionTypes.UPDATE_PRODUCT:
//             return[...state,action.product]
        
//         case ProductActionTypes.SHOW_ALL_PRODUCTS:
//             return{...state, products:action.products }    
        
            
//         case ProductActionTypes.SHOW_SELECTED_PRODUCT:
//             return{...state, product:action.product}
            
//         default:
//             return state;
            
//     }
// }
// export default productReducer;
import {ADD_PRODUCT,UPDATE_PRODUCT,SHOW_ALL_PRODUCTS,SHOW_SELECTED_PRODUCT ,REMOVE_SELECTED_PRODUCT,DISPLAY_MESSAGE,REDIRECT_TO_SHOW,REDIRECT_TO_UPDATE} from '../../actionTypes/ProductActionTypes';
const defaultState = {
    product : null,
    productList : [],
    // productIds : new Set(),
    processing : false,
    redirectToUpdate : false,
    redirectToShow : false,
    redirectionId : 0,
    message:""
}


export default (state = defaultState,action) => {
    let newState = {...state};
    switch (action.type){
        case SHOW_SELECTED_PRODUCT :
            newState.product = action.product;
            newState.message = action.message;
            break;
        case DISPLAY_MESSAGE:
            newState.message = action.message;
            break;
        case REDIRECT_TO_UPDATE: 
            newState.redirectToUpdate = action.value;
            newState.product = null;
            newState.redirectionId = action.redirectionId;
            break;
        case REDIRECT_TO_SHOW:
            newState.redirectToShow = action.value;
            newState.product = null;
            newState.redirectionId = action.redirectionId;
            break;
        case SHOW_ALL_PRODUCTS:
            newState.productList = action.productList;
            newState.message = action.message;
            break;
        
        default :
            newState = state;
    }
    return newState;
}