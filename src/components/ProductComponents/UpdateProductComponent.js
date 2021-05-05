import React from "react";
export default class UpdateOrderBillComponent extends React.Component{

    ProductIdRef=React.createRef();
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

        let component;
       
            component = (<div>
                <div>View Product.product</div>
                
                <form onSubmit = {this.onSubmit} >
                <div>
                Product ID : <input type = "number" min = "0" value = {this.props.product.productId} ref = {this.ProductIdRef}/> <br/>
                <input type="file" onChange={this.handleChange} ref={this.photoPathRef}/>
                NAME: <input type="text" min="3" max="15" ref={this.nameRef}/><br/>
                DESCRIPTION: <input type="textarea" max="150" ref={this.descriptionRef}/><br/>
                <label>
                AVAILABLE: <input type="checkbox" ref={this.availableRef}/>        
                </label><br />
                PRICE: <input type="number" ref={this.priceRef}/><br/>
                <br/>
                <button type="submit">Update</button>
                <br/>
                </div>
                </form>
            </div>);
        
        
        return component;
    }



    onSubmit = (event) => {
        event.preventDefault();
        
        const product = {
            name : this.nameRef.current.value,
            description : this.descriptionRef.current.value,
            price : this.priceRef.current.value,
            available : this.availableRef.current.checked,
            photopath:this.photoPathRef.current.value,
            
        }
        this.props.onSubmit(product);
    }
    handleChange = (event) => {
        this.setState({
           file: String(this.photoPathRef.current.files[0].name)
            
        })
    }

}

