import React from "react";
export default class UpdateOrderBillComponent extends React.Component{

    categoryIdRef = React.createRef();
    nameRef= React.createRef();
    render(){

        let component;
        if (this.props.category == null)
        component = <p>{this.props.message}</p>
        else{
               component = (<div>
                <form onSubmit = {this.onSubmit} onReset = {this.onReset}>
                <div>
                Category Id : <input type = "number" min = "0" value = {this.props.category.categoryId} ref = {this.categoryIdRef}/> <br/>
                Category Name: <input type="text" ref={this.nameRef}/>
                <button type="submit">Update</button>
                <br/>
                <button type="reset">Reset</button>
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
        this.props.onReset();
        this.forceUpdate();
    }
}

