
import {ProductActionTypes} from "../actionTypes/ProductActionTypes";

export const addProduct =(product) =>{
    return{
        type:ProductActionTypes.ADD_PRODUCT,
        payload:product
        
    }
}
export const updateProduct =(product) =>{
    return{
        type:ProductActionTypes.UPDATE_PRODUCT,
        payload:product
    }
}
export const removeProduct =(product) =>{
    return{
        type:ProductActionTypes.REMOVE_SELECTED_PRODUCT,
        payload:product
    }
}
export const showAllProducts = (products) =>{
    return{
        type:ProductActionTypes.SHOW_ALL_PRODUCTS,
        payload:products
    }
}
export const showProductByID =(product) =>{
    return{
        type:ProductActionTypes.SHOW_SELECTED_PRODUCT,
        payload:product
    }
}

