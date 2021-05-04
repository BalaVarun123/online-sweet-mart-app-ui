import React from "react";
export default class ShowCategoryComponent extends React.Component{
    render(){
        console.log("message is "+this.props.message)
        
        let component;
        if (this.props.category == null)
        component = <p>{this.props.message}</p>
        else 
        component = ( <div>
            <div>Show Category</div>
            <div>
            Category Id : {this.props.category.categoryId} <br/>
            Name : {this.props.category.name} <br/>
            <button type="button" onClick = {this.props.onClickUpdate}>Update</button>
            <button type="button" onClick = {this.onClickDelete}>Delete</button>
            </div>
        </div>);
        return component;
    }
    
 onClickDelete = (event) => {
        this.props.onClickDelete(this.props.category.categoryId);
    }
}
