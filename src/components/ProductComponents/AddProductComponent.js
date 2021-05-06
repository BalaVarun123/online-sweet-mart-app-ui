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
        let component=(<div  class="ui column stackable center page grid">
        <div class="three wide column"></div>
        <form onSubmit = {this.onSubmit} className = "ui ten wide column form segment">
            <div>
            <div className = "field">
            <input type="file" onChange={this.handleChange} ref={this.photoPathRef}/>
            <img src={this.state.file} style={{width:70}}/><br/>
            
            </div>
            <div className = "field">
                NAME: <input type="text" min="3" max="15" ref={this.nameRef}/><br/>
                </div>
                
                <div className = "field">
                PRICE: <input type="number" step="0.01" ref={this.priceRef}/><br/>
                <br/>
                </div>
                <div className = "field">
                DESCRIPTION: <input type="text" max="150" ref={this.descriptionRef}/><br/>
                </div>
                <div className = "field">
                <label>
                    AVAILABLE:
                    <input type="checkbox" ref={this.availableRef}/>
                
                </label><br />
                </div>
                
                <button type="submit" className="ui left floated button primary">Add Product</button>
                <br/>


            </div>
        </form>
        </div>);
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
            file: URL.createObjectURL(event.target.files[0])
        })
    }
   
}