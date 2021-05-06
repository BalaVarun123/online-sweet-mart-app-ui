import React from "react";
import { connect } from "react-redux";
import { _displayMessage, _redirectToUpdate, _showAllSweetItem } from "../../actions/SweetItemActions";
import SweetItemService from "../../services/SweetItemServices/SweetItemService";
import ListSweetItemComponent from "./ListSweetItemComponent";
const  sweetItemService = new SweetItemService();
class ListSweetItem extends React.Component{
   
    render(){
        if (this.props.redirectToUpdate)
        this.props.history.push(`/sweet-item/update/${this.props.redirectionId}`)
        return <div className = "ui container">
            <div className="ui huge header center aligned">All SweetItems</div>
            <ListSweetItemComponent sweetItemList = {this.props.sweetItemList} message = {this.props.message} onClickUpdate = {this.props.onClickUpdate} onClickDelete = {this.props.onClickDelete}/>
        </div>
    }

    componentDidMount(){
        sweetItemService.getAllSweetItems(this.props.loadResponseCallBack ,this.props.loadCatchCallBack)
    }

}
const mapStatesToProps = (state, props) => {
    return {
        sweetItemList : state.sweetItem.sweetItemList,
        message : state.sweetItem.message,
        redirectToUpdate : state.sweetItem.redirectToUpdate,
        redirectionId : state.sweetItem.redirectionId
    }
}

const mapDispatchToProps = (dispatch) =>{
    const loadResponseCallBack = (response) => {dispatch(_showAllSweetItem(response.data))};
    const loadCatchCallBack = (error) => dispatch(_showAllSweetItem([], "Could not retrieve data."));
    const deleteResponseCallBack =  (response) => {
        dispatch(_displayMessage("Record deleted."));
        sweetItemService.getAllSweetItems(loadResponseCallBack,loadCatchCallBack)
        }
    const deleteCatchCallBack = (error) => dispatch(_displayMessage(error.response.data));
    return {
        loadResponseCallBack : loadResponseCallBack,
        loadCatchCallBack : loadCatchCallBack,
        onClickDelete : (id) => {
            sweetItemService.deleteSweetItem(id,deleteResponseCallBack,deleteCatchCallBack );
        },
        onClickUpdate : (id) => {
            dispatch(_redirectToUpdate(true,id));
        }
    }
}

export default connect(mapStatesToProps,mapDispatchToProps)(ListSweetItem);
