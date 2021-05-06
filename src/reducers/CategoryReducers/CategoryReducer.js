import {CATEGORY_DISPLAY_MESSAGE, CATEGORY_REDIRECT_TO_SHOW, CATEGORY_REDIRECT_TO_UPDATE, CATEGORY_SHOW, CATEGORY_SHOW_ALL} from "../../actionTypes/CategoryActionTypes"
const defaultState = {
    category : null,
    categoryList : [],
    processing : false,
    redirectToUpdate : false,
    redirectToShow : false,
    redirectionId : 0,
    message:""
}


export default (state = defaultState,action) => {
    let newState = {...state};
    switch (action.type){
        case CATEGORY_SHOW :
            newState.category = action.category;
            newState.message = action.message;
            break;
        case CATEGORY_DISPLAY_MESSAGE:
            newState.message = action.message;
            break;
        case CATEGORY_REDIRECT_TO_UPDATE: 
            newState.redirectToUpdate = action.value;
            newState.category = null;
            newState.redirectionId = action.redirectionId;
            break;
        case CATEGORY_REDIRECT_TO_SHOW:
            newState.redirectToShow = action.value;
            newState.category = null;
            newState.redirectionId = action.redirectionId;
            break;
        case CATEGORY_SHOW_ALL:
            newState.categoryList = action.categoryList;
            newState.message = action.message;
            break;
        default :
            newState = state;
    }
    return newState;
}