import React from "react";

import { connect } from "react-redux";
import ShowOrderBillComponent from "./ShowOrderBillComponent";
import {_displayMessage, _redirectToShow, _redirectToUpdate, _showOrderBill} from "../../actions/OrderBillActions";
import OrderBillService from "../../services/OrderBillServices/OrderBillService";
import Header from "../pages/Header";
import Footer from "../pages/Footer";

const orderBillService = new OrderBillService();;
class ShowOrderBill extends React.Component{

    

    render(){
        if (this.props.redirectToUpdate){
            this.props.history.push(`/order-bill/update/${this.props.id}`)
        }
        if (this.props.redirectToShow){
            this.props.resetRedirection();
        }
        return <div className = "ui container">
             <Header title={"ORDER BILL RECORD FOR id = "+this.props.id}/>
            <ShowOrderBillComponent orderBill = {this.props.orderBill} onClickDelete = {this.onClickDelete} onClickUpdate = {this.props.onClickUpdate} onClickViewSweetOrder = {this.props.onClickViewSweetOrder} message = {this.props.message}/>
            <Footer/>
        </div>
    }


    componentDidMount(){
        orderBillService.getOrderBill(this.props.id,this.props.responseCallBack,this.props.catchCallBack);
    }

    onClickDelete = (id) => {
        orderBillService.deleteOrderBill(id);
        this.props.history.push("/");
    }

}

const mapStateToProps = (state,props) => {
    return {
        orderBill : state.orderBill.orderBill,
        message : state.orderBill.message,
        id : props.match.params.id,
        redirectToUpdate: state.orderBill.redirectToUpdate,
        redirectToShow : state.orderBill.redirectToShow
    }

}
const mapDispatchToProps = (dispatch) => {
    return {

        onClickUpdate : () => {dispatch(_redirectToUpdate(true))},
        onClickViewSweetOrder : () => {},
        responseCallBack : (response) => {
            if (response.data.length > 0)
            dispatch(_showOrderBill(response.data[0], ""))
            else 
            dispatch(_showOrderBill(null,"Invalid Order Bill Id"))
        },
        catchCallBack : (error) => {dispatch(_showOrderBill(null,error.response.data))},
        resetRedirection : () => {dispatch(_redirectToShow(false))}
    }
   

}
export default connect(mapStateToProps,mapDispatchToProps)(ShowOrderBill); 