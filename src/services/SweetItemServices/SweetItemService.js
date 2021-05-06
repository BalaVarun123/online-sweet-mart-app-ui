
  
import axios from "../../axios/axios";

const URL_SWEET_ITEM_SHOW = "/showSweetItem/";
const URL_SWEET_ITEM_UPDATE = "/updateSweetItem";
const URL_SWEET_ITEM_DELETE = "/cancelSweetItem/";
const URL_SWEET_ITEM_ADD = "/addSweetItem";
const URL_SWEET_ITEM_SHOW_ALL = "/showAllSweetItems";
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
