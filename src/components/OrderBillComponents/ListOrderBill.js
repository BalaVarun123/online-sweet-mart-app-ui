import React from "react";
import { connect } from "react-redux";
import { _displayMessage, _redirectToUpdate, _showAllOrderBill } from "../../actions/OrderBillActions";
import OrderBillService from "../../services/OrderBillServices/OrderBillService";
import Footer from "../pages/Footer";
import Header from "../pages/Header";
import ListOrderBillComponent from "./ListOrderBillComponent";
const  orderBillService = new OrderBillService();
class ListOrderBill extends React.Component{
   
    render(){
        if (this.props.redirectToUpdate)
        this.props.history.push(`/order-bill/update/${this.props.redirectionId}`)
        return <div className = "ui container">
            <Header title={"ALL ORDER BILL RECORDS"}/>
            <ListOrderBillComponent orderBillList = {this.props.orderBillList} message = {this.props.message} onClickUpdate = {this.props.onClickUpdate} onClickDelete = {this.props.onClickDelete}/>
            <Footer/>
        </div>
    }

    componentDidMount(){
        orderBillService.getAllOrderBills(this.props.loadResponseCallBack ,this.props.loadCatchCallBack)
    }


    


}
const mapStatesToProps = (state, props) => {
    return {
        orderBillList : state.orderBill.orderBillList,
        message : state.orderBill.message,
        redirectToUpdate : state.orderBill.redirectToUpdate,
        redirectionId : state.orderBill.redirectionId
    }
}

const mapDispatchToProps = (dispatch) =>{
    const loadResponseCallBack = (response) => {dispatch(_showAllOrderBill(response.data))};
    const loadCatchCallBack = (error) => dispatch(_showAllOrderBill([], "Could not retrieve data."));
    const deleteResponseCallBack =  (response) => {
        dispatch(_displayMessage("Record deleted."));
        orderBillService.getAllOrderBills(loadResponseCallBack,loadCatchCallBack)
        }
    const deleteCatchCallBack = (error) => dispatch(_displayMessage(error.response.data));
    return {
        loadResponseCallBack : loadResponseCallBack,
        loadCatchCallBack : loadCatchCallBack,
        onClickDelete : (id) => {
            orderBillService.deleteOrderBill(id,deleteResponseCallBack,deleteCatchCallBack );
        },
        onClickUpdate : (id) => {
            dispatch(_redirectToUpdate(true,id));
        }
    }
}

export default connect(mapStatesToProps,mapDispatchToProps)(ListOrderBill);