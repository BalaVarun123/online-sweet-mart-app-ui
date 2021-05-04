import React from "react";

export default class AddProductComponent extends React.Component{
    nameRef = React.createRef();
    descriptionRef = React.createRef();
    priceRef = React.createRef();
    constructor(props){
        super(props);

    }
    render(){
        let component=(
        <form onSubmit = {this.onSubmit}>
            <div>
                
                NAME: <input type="text" min="3" max="15" ref={this.nameRef}/><br/>
                DESCRIPTION: <input type="textarea"  max="150" ref={this.descriptionRef}/><br/>
                
                {/* AVAILABILITY:
                <input type="checkbox"  checked>true</input>
                <input type="checkbox">false</input>
                <br/> */}
                PRICE: <input type="number" ref={this.priceRef}/><br/>
                <br/>
                <button type="submit">Add Product</button>
                <br/>


            </div>
        </form>);
        return component;
    }  
    onSubmit = (event) => {
        event.preventDefault();
        const listProducts = Array.from(this.props);
        const product = {
            name : this.nameRef.current.value,
            description : this.descriptionRef.current.value,
            price : this.priceRef.current.value,
            listProducts : listProducts 
        }
        this.props.onSubmit(product);
    } 
}