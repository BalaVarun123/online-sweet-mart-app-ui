import axios from "../../axios/axios";

const URL_ADMIN_SHOW = "/admin/show/";
const URL_ADMIN_UPDATE = "/admin/update";
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

}