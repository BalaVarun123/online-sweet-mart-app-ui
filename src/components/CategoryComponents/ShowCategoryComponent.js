import React from "react";
export default class ShowCategoryComponent extends React.Component{
    render(){
        console.log("message is "+this.props.message)
        
        let component;
        if (this.props.category == null)
        component = <h2>{this.props.message}</h2>
        else 
        component = ( <div class="ui column stackable center page grid">
             <div class="three wide column"></div>
            <div className = "ui ten wide column big list segment">
            <div class="item">
            <label> Category Id : </label>{this.props.category.categoryId} 
            </div>
            <div class="item">
            Name : {this.props.category.name} <br/>
            </div>
            <div class="item">
            <label>Total Cost : </label> {this.props.category.totalCost}<br/>
            </div>
            <button type="button" onClick = {this.props.onClickUpdate} className ="ui left floated button primary">Update</button>
            <button type="button" onClick = {this.onClickDelete} className="ui right floated button negative">Delete</button>
            </div>
        </div>);
        return component;
    }
    
 onClickDelete = (event) => {
        this.props.onClickDelete(this.props.category.categoryId);
    }
}