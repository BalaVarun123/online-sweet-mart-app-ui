import axios from "../../axios/axios";

const URL_PRODUCT_SHOW = "/product/show-by-id/";
const URL_PRODUCT_UPDATE = "/product/update";
const URL_PRODUCT_DELETE = "/product/cancel/";
const URL_PRODUCT_ADD = "/product/add";
const URL_PRODUCT_SHOW_ALL = "/product/show-all";
export default class ProductService {
    getProduct(id,responseCallBack,catchCallBack){
        axios.get(URL_PRODUCT_SHOW+id)
        .then(responseCallBack)
        .catch(catchCallBack);
    }

    updateProduct(product,responseCallBack,catchCallBack){
        axios.put(URL_PRODUCT_UPDATE,product)
        .then(responseCallBack)
        .catch(catchCallBack);
    }


    deleteProduct(id,responseCallBack,catchCallBack){
        axios.delete(URL_PRODUCT_DELETE+id)
        .then(responseCallBack)
        .catch(catchCallBack);
    }

    addProduct(product,responseCallBack,catchCallBack){
        axios.post(URL_PRODUCT_ADD,product)
        .then(responseCallBack)
        .catch(catchCallBack);
    }

    getAllProducts(responseCallBack,catchCallBack){
        axios.get(URL_PRODUCT_SHOW_ALL)
        .then(responseCallBack)
        .catch(catchCallBack);
    }

}