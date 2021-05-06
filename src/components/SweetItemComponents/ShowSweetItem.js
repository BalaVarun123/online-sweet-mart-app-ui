
  
import React from "react";
import { connect } from "react-redux";
import ShowSweetItemComponent from "./ShowSweetItemComponent";
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import {_displayMessage, _redirectToShow, _redirectToUpdate, _showSweetItem} from "../../actions/SweetItemActions";
import SweetItemService from "../../services/SweetItemServices/SweetItemService";

const sweetItemService = new SweetItemService();;
class ShowSweetItem extends React.Component{

    

    render(){
        if (this.props.redirectToUpdate){
            this.props.history.push(`/sweet-item/update/${this.props.id}`)
        }
        if (this.props.redirectToShow){
            this.props.resetRedirection();
        }
        return <div  className = "ui container">
            <Header title="SWEET ITEM DETAILS" />
            <br/>
            <ShowSweetItemComponent sweetItem = {this.props.sweetItem} onClickDelete = {this.onClickDelete} onClickUpdate = {this.props.onClickUpdate} message = {this.props.message}/>
            <br/><br/>
            <Footer></Footer>
            </div>
    }


    componentDidMount(){
        sweetItemService.getSweetItem(this.props.id,this.props.responseCallBack,this.props.catchCallBack);
    }

    onClickDelete = (id) => {
        sweetItemService.deleteSweetItem(id);
        this.props.history.push("/");
    }

}

const mapStateToProps = (state,props) => {
    return {
        sweetItem : state.sweetItem.sweetItem,
        message : state.sweetItem.message,
        id : props.match.params.id,
        redirectToUpdate: state.sweetItem.redirectToUpdate,
        redirectToShow : state.sweetItem.redirectToShow
    }

}
const mapDispatchToProps = (dispatch) => {
    return {

        onClickUpdate : () => {dispatch(_redirectToUpdate(true))},
        onClickView : () => {dispatch(_redirectToShow(true))},
        onClickViewProduct : () => {},
        onClickViewSweetOrder : () => {},
        responseCallBack : (response) => {
            dispatch(_showSweetItem(response.data, ""))
        },
        catchCallBack : (error) => {dispatch(_showSweetItem(null,error.response.data))},
        resetRedirection : () => {dispatch(_redirectToShow(false))}
    }
   

}
export default connect(mapStateToProps,mapDispatchToProps)(ShowSweetItem); 
