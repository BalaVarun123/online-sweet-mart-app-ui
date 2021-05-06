
  
import React from "react";
import { Link } from "react-router-dom";
class ListSweetItemComponent extends React.Component{
    constructor(props){
        super(props);
        this.details = [];
    }

    render(){
        this.loadDetails(this.props.sweetItemList);
        return <div>
            <p>{this.props.message}</p> 
            <div>
            <table className = "ui celled table large selectable">
            <thead>
              <tr>
                  <th className = "center aligned">Order Item Id</th>
                  <th className = "center aligned" colSpan = {3} >Action</th> {/*UPDATE DELETE*/}
              </tr>  
            </thead>
            <tbody>{this.details}</tbody>
           </table>
           </div>
        </div>
    }




    loadDetails = (sweetItemList) =>{
        console.log("sweetItemList is of length :"+sweetItemList.length);
        if (sweetItemList && sweetItemList.length > 0){
            let rows = [];
            for (let sweetItem of sweetItemList){
                rows.push(
                    <tr key = {sweetItem.orderItemId}>
                        <td><Link to={"/sweet-Item/show/"+ sweetItem.orderItemId}>{sweetItem.orderItemId}</Link></td>
                        <td className = "center aligned"><Link to={`/sweet-item/show/${sweetItem.orderItemId}`}><button type="button" className = "ui button primary" onClick = {this.onClickView.bind(this,sweetItem.orderItemId)}>View </button></Link></td>
                        <td className = "center aligned"><button type="button" className = "ui button primary" onClick = {this.onClickUpdate.bind(this,sweetItem.orderItemId)}>UPDATE</button></td>
                        <td className = "center aligned"><button type="button" className = "ui button negative" onClick = {this.onClickDelete.bind(this,sweetItem.orderItemId)}>DELETE</button></td>
                    </tr>
                    
                );
            }
            this.details = rows;
        }
        
    }


    componentDidMount(){
        console.log("component mounted");
    }

    onClickUpdate = (id,_event)=>{
        this.props.onClickUpdate(id);
    }
    onClickView = (id,_event)=>{
        this.props.onClickView(id);
        
    }

    onClickDelete = (id,_event) => {
        this.props.onClickDelete(id);
    }

    onClickViewProducts = (_event) => {

    }

    onClickViewSweetOrders = (_event) => {

    }

}

export default ListSweetItemComponent;
