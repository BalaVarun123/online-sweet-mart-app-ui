import axios from "../../axios/axios";

const URL_SWEET_ORDER_SHOW = "/showAllSweetOrder/";
const URL_SWEET_ORDER_UPDATE = "/updateSweetOrder";
const URL_SWEET_ORDER_DELETE = "/cancelSweetOrder/";
const URL_SWEET_ORDER_ADD = "/addSweetOrder";
const URL_SWEET_ORDER_SHOW_ALL = "/showAllSweetOrders";
const URL_SWEET_ORDER_CALCULATE_TOTAL_COST = "/calculateTotalCost/";
export default class SweetOrderService {


    constructor(){
        this.getSweetOrder.bind(this);
        this.updateSweetOrder.bind(this);
        this.deleteSweetOrder.bind(this);
        this.addSweetOrder.bind(this);
        this.getTotalCost.bind(this);

    }

    async getSweetOrder(id,responseCallBack,catchCallBack){
        let sweetOrder = null;
        await axios.get(URL_SWEET_ORDER_SHOW+id)
        .then((response) => sweetOrder = response.data)
        .catch(catchCallBack);
        if (sweetOrder == null){
            catchCallBack({response:{data:"Invalid Sweet Order Id."}})
        }
        else {
            await this.getTotalCost(id,
                (response) => { sweetOrder.totalCost = response.data;},
                error => sweetOrder.totalCost = 0);
            responseCallBack({data:sweetOrder});
        }
    }

    updateSweetOrder(sweetOrder,responseCallBack,catchCallBack){
        axios.put(URL_SWEET_ORDER_UPDATE,sweetOrder)
        .then(responseCallBack)
        .catch(catchCallBack);
    }


    deleteSweetOrder(id,responseCallBack,catchCallBack){
        axios.delete(URL_SWEET_ORDER_DELETE+id)
        .then(responseCallBack)
        .catch(catchCallBack)
    }

    addSweetOrder(sweetOrder,responseCallBack,catchCallBack){
        axios.post(URL_SWEET_ORDER_ADD,sweetOrder)
        .then(responseCallBack)
        .catch(catchCallBack);
    }

    getAllSweetOrders(responseCallBack,catchCallBack){
        axios.get(URL_SWEET_ORDER_SHOW_ALL)
        .then(responseCallBack)
        .catch(catchCallBack)
    }

    async getTotalCost(id,responseCallBack,catchCallBack){
        return axios.get(URL_SWEET_ORDER_CALCULATE_TOTAL_COST+id)
        .then(responseCallBack)
        .catch(catchCallBack);
    }

}