import axios from "../../axios/axios";

const URL_CATEGORY_SHOW = "/category/show/";
const URL_CATEGORY_UPDATE = "/category/update";
const URL_CATEGORY_DELETE = "/category/cancel/";
const URL_CATEGORY_ADD = "/category/add";
const URL_CATEGORY_SHOW_ALL = "/category/show-all";
export default class categoryService {
    getCategory(id,responseCallBack,catchCallBack){
        axios.get(URL_CATEGORY_SHOW+id)
        .then(responseCallBack)
        .catch(catchCallBack);
    }

    updateCategory(category,responseCallBack,catchCallBack){
        axios.put(URL_CATEGORY_UPDATE,category)
        .then(responseCallBack)
        .catch(catchCallBack);
    }


    deleteCategory(id,responseCallBack,catchCallBack){
        axios.delete(URL_CATEGORY_DELETE+id)
        .then(responseCallBack)
        .catch(catchCallBack)
    }

    addCategory(category,responseCallBack,catchCallBack){
        axios.post(URL_CATEGORY_ADD,category)
        .then(responseCallBack)
        .catch(catchCallBack);
    }

    getAllCategory(responseCallBack,catchCallBack){
        axios.get(URL_CATEGORY_SHOW_ALL)
        .then(responseCallBack)
        .catch(catchCallBack)
    }

}