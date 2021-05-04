import axios from "../../axios/axios";

const URL_ORDER_BILL_SHOW = "/order-bill/show/";
const URL_ORDER_BILL_UPDATE = "/order-bill/update";
const URL_ORDER_BILL_DELETE = "/order-bill/cancel/";
const URL_ORDER_BILL_ADD = "/order-bill/add";
const URL_ORDER_BILL_SHOW_ALL = "/order-bill/show-all";
export default class OrderBillService {
    getOrderBill(id,responseCallBack,catchCallBack){
        axios.get(URL_ORDER_BILL_SHOW+id)
        .then(responseCallBack)
        .catch(catchCallBack);
    }

    updateOrderBill(orderBill,responseCallBack,catchCallBack){
        axios.put(URL_ORDER_BILL_UPDATE,orderBill)
        .then(responseCallBack)
        .catch(catchCallBack);
    }


    deleteOrderBill(id,responseCallBack,catchCallBack){
        axios.delete(URL_ORDER_BILL_DELETE+id)
        .then(responseCallBack)
        .catch(catchCallBack)
    }

    addOrderBill(orderBill,responseCallBack,catchCallBack){
        axios.post(URL_ORDER_BILL_ADD,orderBill)
        .then(responseCallBack)
        .catch(catchCallBack);
    }

    getAllOrderBills(responseCallBack,catchCallBack){
        axios.get(URL_ORDER_BILL_SHOW_ALL)
        .then(responseCallBack)
        .catch(catchCallBack)
    }

}