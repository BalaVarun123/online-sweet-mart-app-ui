import axios from "../../axios/axios";

const URL_ADMIN_SHOW = "/admin/show/";
const URL_ADMIN_UPDATE = "/admin/update";
const URL_ADMIN_DELETE = "/admin/cancel/";
const URL_ADMIN_ADD = "/admin/add";
const URL_ADMIN_SHOW_ALL = "/admin/show-all";
export default class AdminService {
    getAdmin(id,responseCallBack,catchCallBack){
        //console.log("id ="+id+" res = "+responseCallBack +" catch = "+catchCallBack);
        axios.get(URL_ADMIN_SHOW+id)
        .then(responseCallBack)
        .catch(catchCallBack);
    }

    updateAdmin(admin,responseCallBack,catchCallBack){
        axios.put(URL_ADMIN_UPDATE,admin)
        .then(responseCallBack)
        .catch(catchCallBack);
    }


    deleteAdmin(id,responseCallBack,catchCallBack){
        axios.delete(URL_ADMIN_DELETE+id)
        .then(responseCallBack)
        .catch(catchCallBack)
    }

    addAdmin(admin,responseCallBack,catchCallBack){
        axios.post(URL_ADMIN_ADD,admin)
        .then(responseCallBack)
        .catch(catchCallBack);
    }

    getAllAdmins(responseCallBack,catchCallBack){
        axios.get(URL_ADMIN_SHOW_ALL)
        .then(responseCallBack)
        .catch(catchCallBack)
    }

}