import axios from "../../axios/axios";

const URL_ORDER_BILL_SHOW = "/customer/show/";
const URL_ORDER_BILL_UPDATE = "/customer/update";
const URL_ORDER_BILL_DELETE = "/customer/cancel/";
const URL_ORDER_BILL_ADD = "/customer/add";
const URL_ORDER_BILL_SHOW_ALL = "/customer/show-all";
export default class CustomerService {
    getCustomer(id,responseCallBack,catchCallBack){
        axios.get(URL_CUSTOMER_SHOW+id)
        .then(responseCallBack)
        .catch(catchCallBack);
    }

    updateCustomer(customer,responseCallBack,catchCallBack){
        axios.put(URL_CUSTOMER_UPDATE,customer)
        .then(responseCallBack)
        .catch(catchCallBack);
    }


    deleteCustomer(id,responseCallBack,catchCallBack){
        axios.delete(URL_CUSTOMER_DELETE+id)
        .then(responseCallBack)
        .catch(catchCallBack);
    }

    addCustomer(customer,responseCallBack,catchCallBack){
        axios.post(URL_CUSTOMER_ADD,customer)
        .then(responseCallBack)
        .catch(catchCallBack);
    }

    getAllCustomers(responseCallBack,catchCallBack){
        axios.get(URL_CUSTOMER_SHOW_ALL)
        .then(responseCallBack)
        .catch(catchCallBack);
    }

}