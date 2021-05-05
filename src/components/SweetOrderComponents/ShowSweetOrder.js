import ShowSweetOrderComponent from "./ShowSweetOrderComponent"
import React from "react";
import SweetOrderService from "../../services/SweetOrderServices/SweetOrderService";
import {_showSweetOrder,_sweetOrderDisplayMessage,_sweetOrderRedirectToUpdate} from "../../actions/SweetOrderActions";
import { connect } from "react-redux";
class ShowSweetOrder extends React.Component{


    sweetOrderService = new SweetOrderService();

    constructor(props){
        super(props);
        this.sweetOrderService.getSweetOrder(this.props.id,this.props.responseCallBack,this.props.catchCallBack);
    }

    render(){
        if (this.props.redirectToUpdate ){
            this.props.history.push(`/sweet-order/update/${this.props.id}`)
        }
        return <div className = "ui container">
            <div className="ui huge header center aligned">Sweet Order Details</div>
            <ShowSweetOrderComponent sweetOrder = {this.props.sweetOrder} message = {this.props.message} onClickUpdate = {this.props.onClickUpdate} onClickDelete = {this.onClickDelete}/>
        </div>
    }

    
    componentDidMount(){
    
        //this.sweetOrderService.getSweetOrder(this.props.id,this.props.responseCallBack,this.props.catchCallBack);
    }

    
    onClickDelete = () => {

    }

}


const mapStateToProps = (state,props) => {
    return {
        sweetOrder : state.sweetOrder.sweetOrder,
        id : props.match.params.id,
        message : state.sweetOrder.message,
        redirectToUpdate : state.sweetOrder.redirectToUpdate
    }
}


const mapDispatchToProps = (dispatch) => {
    return {

        onClickUpdate : ()=> {

        },
        responseCallBack : (response) => {
            console.log("Sweet Order is :"+JSON.stringify(response.data))
            dispatch(_showSweetOrder(response.data));
        },
        catchCallBack : (error) => {
            console.log("erroe is :"+error)
            dispatch(_sweetOrderDisplayMessage(error.response.data));
        }


    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowSweetOrder)