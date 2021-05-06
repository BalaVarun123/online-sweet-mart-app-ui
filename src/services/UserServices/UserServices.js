import axios from "../../axios/axios";
const USER_URL_GET = "/user/show/";
export default class UserServices {
    getUser(userId,responseCallback,catchCallback){
        return axios.get(USER_URL_GET + userId)
        .then(responseCallback)
        .catch(catchCallback);
    }
}