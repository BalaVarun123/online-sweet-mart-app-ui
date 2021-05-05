import React from "react";
export default class ShowOrderBillComponent extends React.Component{
    render(){
        console.log("message is "+this.props.message)
        
        let component;
        if (this.props.orderBill == null)
        component = <h2>{this.props.message}</h2>
        else 
        component = ( <div class="ui column stackable center page grid">
             <div class="three wide column"></div>
            <div className = "ui ten wide column big list segment">
            <div class="item">
            <label>Order Bill Id : </label>{this.props.orderBill.orderBillId} 
            </div>
            <div class="item">
            <label>Created date : </label>{this.props.orderBill.createdDate} 
            </div>
            <div class="item">
            <label>Total Cost :</label> {this.props.orderBill.totalCost}
            </div>
            {/*<button type = "button">View Sweet orders</button>*/}
            <button type="button" onClick = {this.props.onClickUpdate} className="ui left floated button primary">Update</button>
            <button type="button" onClick = {this.onClickDelete} className="ui right floated button negative">Delete</button>
            </div>
        </div>);
        return component;
    }


    onClickViewSweetOrders = () => {

    }

    

    onClickDelete = (event) => {
        this.props.onClickDelete(this.props.orderBill.orderBillId);
    }
}
