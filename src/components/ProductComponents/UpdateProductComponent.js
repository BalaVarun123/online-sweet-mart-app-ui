import React from "react";
export default class UpdateProductComponent extends React.Component{

    ProductIdRef=React.createRef();
    nameRef = React.createRef();
    descriptionRef = React.createRef();
    priceRef = React.createRef();
    photoPathRef=React.createRef();
    


    constructor(props){
        super(props);
        this.state = {
            file: null
          }
          this.handleChange = this.handleChange.bind(this)

    }


    render(){
        
        let component;
        if (this.props.product == null)
        component = <p>{this.props.message}</p>
        else{
            
            component = (<div className="ui column stackable center page grid">
                <div className="three wide column"></div>
                <form onSubmit = {this.onSubmit} className = "ui ten wide column form segment">
                <div>
                <div className = "field">
                Product ID : <input type = "number" min = "0" value = {this.props.product.productId} ref = {this.ProductIdRef}/> <br/>
                </div>
                <div className = "field">
                <input type="file"  ref={this.photoPathRef}/>
                {/* PhotoPath :{this.props.product.photopath}<br/> */}
                </div>
                <div className = "field">
                NAME: <input type="text" min="3" max="15" defaultValue = {this.props.product.name} ref={this.nameRef}/><br/>
                </div>
                <div className = "field">
                DESCRIPTION: <input type="text" max="150" defaultValue = {this.props.product.description} ref={this.descriptionRef}/><br/>
                </div>
                <div className = "field">
                PRICE: <input type="number" min="0" step="0.01" defaultValue = {this.props.product.price} ref={this.priceRef}/><br/>
                </div>
                <br/>
                <button type="submit" className="ui left floated button primary">Update</button>
                <button type="button" className="ui right floated button"><a href="http://localhost:3000/product/show-all">PRODUCT LIST</a></button>
                <br/>
                </div>
                <p>{this.props.message}</p>
                </form>
            </div>);
        
            }
        return component;
    }



    onSubmit = (event) => {
        event.preventDefault();
        
        const product = {
            name : this.nameRef.current.value,
            description : this.descriptionRef.current.value,
            price : this.priceRef.current.value,
            available : true,
            photopath:this.photoPathRef.current.value,
            productId : this.props.product.productId
        }
        this.props.onSubmit(product);
    }
    handleChange = (event) => {
        this.setState({
           file: String(this.photoPathRef.current.files[0].name)
            
        })
    }

}

