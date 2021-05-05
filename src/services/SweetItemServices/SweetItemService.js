import axios from "../../axios/axios";

const URL_SWEET_ITEM_SHOW = "/sweet-item/show/";
const URL_SWEET_ITEM_UPDATE = "/sweet-item/update";
const URL_SWEET_ITEM_DELETE = "/sweet-item/cancel/";
const URL_SWEET_ITEM_ADD = "/sweet-item/add";
const URL_SWEET_ITEM_SHOW_ALL = "/sweet-item/show-all";
export default class SweetItemService {
    getSweetItem(id,responseCallBack,catchCallBack){
        axios.get(URL_SWEET_ITEM_SHOW+id)
        .then(responseCallBack)
        .catch(catchCallBack);
    }

    updateSweetItem(sweetItem,responseCallBack,catchCallBack){
        axios.put(URL_SWEET_ITEM_UPDATE,sweetItem)
        .then(responseCallBack)
        .catch(catchCallBack);
    }


    deleteSweetItem(id,responseCallBack,catchCallBack){
        axios.delete(URL_SWEET_ITEM_DELETE+id)
        .then(responseCallBack)
        .catch(catchCallBack)
    }

    addSweetItem(sweetItem,responseCallBack,catchCallBack){
        axios.post(URL_SWEET_ITEM_ADD,sweetItem)
        .then(responseCallBack)
        .catch(catchCallBack);
    }

    getAllSweetItems(responseCallBack,catchCallBack){
        axios.get(URL_SWEET_ITEM_SHOW_ALL)
        .then(responseCallBack)
        .catch(catchCallBack)
    }

}
