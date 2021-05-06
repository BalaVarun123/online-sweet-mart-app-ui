import React from "react";
export default class AddCategoryComponent extends React.Component{
    categoryIdRef = React.createRef();
    nameRef = React.createRef();
    render(){
        let component = (<div class= "ui column stackable centre page grid">
            <div class = "three wide column"></div>
            <form onSubmit = {this.onSubmit} onReset = {this.onReset}  className = "ui ten wide column form segment">
            <div>
            Category Id : (will be auto generated.) <br/>
            <div className="field">
            <label>Category Name: </label> <input type="text" ref={this.nameRef}/>
            </div>
            <button type="submit" className = "ui primary button">Add Category</button>
            
            <button type="reset" className = "ui negative button">Reset</button>
            </div>
            </form>
        </div>);

        return component;
    }
    
    onSubmit = (event) => {
        event.preventDefault();
        const category = {
            name : this.nameRef.current.value,
        }
        this.props.onSubmit(category);
    }

    onReset = (event) => {
        this.props.onReset();
        this.forceUpdate();
    }
}