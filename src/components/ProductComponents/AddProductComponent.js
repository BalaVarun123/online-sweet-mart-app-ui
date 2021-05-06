import React from "react";

export default class AddProductComponent extends React.Component{
    nameRef = React.createRef();
    descriptionRef = React.createRef();
    priceRef = React.createRef();
    photoPathRef=React.createRef();
    availableRef=React.createRef();
    constructor(props){
        super(props);
        this.state = {
            file: null
          }
          this.handleChange = this.handleChange.bind(this)

    }
    render(){
        let component=(
        <form onSubmit = {this.onSubmit}>
            <div>

            <input type="file" onChange={this.handleChange} ref={this.photoPathRef}/>
            <img src={this.state.file} style={{width:70}}/><br/>
            <p>{this.state.file}</p>
                NAME: <input type="text" min="3" max="15" ref={this.nameRef}/><br/>
                DESCRIPTION: <input type="textarea" max="150" ref={this.descriptionRef}/><br/>
                <label>
                    AVAILABLE:
                    <input type="checkbox" ref={this.availableRef}/>
                         {/* checked={this.state.isGoing}
                        onChange={this.handleInputChange}  */}
                </label><br />
                PRICE: <input type="number" step="0.01" ref={this.priceRef}/><br/>
                <br/>
                <button type="submit">Add Product</button>
                <br/>


            </div>
        </form>);
        return component;
    }  
    onSubmit = (event) => {
        event.preventDefault();
        console.log("checkingphoto: "+this.photoPathRef.current.value)
        const listProducts = Array.from(this.props);
        const product = {
            name : this.nameRef.current.value,
            description : this.descriptionRef.current.value,
            price : this.priceRef.current.value,
            available : this.availableRef.current.checked,
            photopath:this.photoPathRef.current.value,
            listProducts : listProducts 
        }
        this.props.onSubmit(product);
    }
    handleChange = (event) => {
        this.setState({
           file: String(this.photoPathRef.current.files[0].name)
            // file:event.target.files[0].value
            // file: URL.createObjectURL(event.target.files[0])
        })
    }
   
}