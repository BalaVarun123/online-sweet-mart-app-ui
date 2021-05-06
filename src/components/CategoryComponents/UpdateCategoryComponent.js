import React from "react";
export default class UpdateCategoryComponent extends React.Component{

    categoryIdRef = React.createRef();
    nameRef= React.createRef();
    render(){

        let component;
        if (this.props.category == null)
        component = <h2>{this.props.message}</h2>
        else{
               component = (<div className="ui column stackable center page grid">
                <div className="three wide column"></div>
                <form onSubmit = {this.onSubmit} onReset = {this.onReset}>
                <div>
                <div className = "field">
                <label>Category Id :</label><input type = "number" min = "0" value = {this.props.category.categoryId} ref = {this.categoryIdRef}/> <br/>
                </div>
                <div className = "field">
                <label>Category Name:</label> <input type="text" ref={this.nameRef}/> <br/>
                </div>
                
                <button type="submit" className="ui left floated button primary">Update</button>
                
                <button type="reset"className="ui right floated button negative" >Reset</button>
                <p>{this.props.message}</p>
                </div>
                </form>
            </div>);
        }
        
        return component;
    }

    onSubmit = (event) => {
        event.preventDefault();
        const category = {
            categoryId : this.categoryIdRef.current.value,
            name : this.nameRef.current.value
        }
        this.props.onSubmit(category);
    }

    onReset = (event) => {
        
        this.forceUpdate();
    }
}