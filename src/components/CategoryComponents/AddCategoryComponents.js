import React from "react";
export default class AddCategoryComponent extends React.Component{
    categoryIdRef = React.createRef();
    nameRef = React.createRef();
    render(){
        let component = (<div>
            <form onSubmit = {this.onSubmit} onReset = {this.onReset}>
            <div>
            Category Id : (will be auto generated.) <br/>
            Category Name: <input type="text" ref={this.nameRef}/>
            <br/>
            <button type="submit">Add Category</button>
            <br/>
            <button type="reset">Reset</button>
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

