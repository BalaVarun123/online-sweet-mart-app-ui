import React from "react";

class ShowSweetOrderComponent extends React.Component {

    constructor(props){
        super(props);
        this.sweetItemElements = [];
        
    }

    

    render(){
        
        let component;
        if (this.props.sweetOrder){
            console.log("sweet order is :::"+JSON.stringify(this.props.sweetOrder.totalCost))
            this.loadSweetItemElements(this.props.sweetOrder.listItems)
            component  = 
            <div class="ui column stackable center page grid">
                 <div className="three wide column"></div>
                <div className = "ui ten wide column big list segment">
                <div class="item">
                <label>ID : </label> {this.props.sweetOrder.sweetOrderId}
                </div>
                <div class="item">
                <label>User ID : </label> {this.props.sweetOrder.user.userId} 
                </div>
                <div class="item">
                <label>Created Date : </label> {this.props.sweetOrder.createdDate}
                </div>
                <div class = "item">
                <label>Total cost : </label> {this.props.sweetOrder.totalCost}
                </div>
                <div class="item">
                <label>Sweet Item ID's : </label>
                {this.sweetItemElements}
                </div>
                <div>
                <button type="button" id = "btn-update" className="ui left floated button primary" onClick = {this.props.onClickUpdate}>Update</button>
                <button type="button" id = "btn-delete" className="ui right floated button negative"onClick = {this.props.onClickDelete}>Delete</button>
                </div>
                </div>
                
                {/*<button type="button">Cancel</button>*/}
            <br/>
        </div>
    }
    else{
        component = <h2>{this.props.message}</h2>
    }
        return component;
    }


    loadSweetItemElements = (listItems) => {
        this.sweetItemElements = listItems.map(
            (item) => <div className="item">{item.orderItemId}</div>
            );
    }

}

export default ShowSweetOrderComponent;