import CartServices from "../../services/CartServices/CartService";
import React from 'react';


class AddCartComponent extends React.Component{

    // cartIdRef = React.createRef();
    productCountRef = React.createRef();
    totalRef = React.createRef();
    grandTotalRef = React.createRef();
    productListRef = React.createRef();
    productIdElements = []
    productIdTags = []

  cartServices = new CartServices(); 
    render(){

        this.renderProductIds ();

        return (
            <div> 
                <p> {this.props.state.message} </p>
              <form onSubmit ={this.onSubmit} onReset = {this.onReset}>
              {/* cartId: <input type = "number" step="1" min = "0" ref = {this.cartIdRef}/> */} 
              productCount: <input type = "number" step="1" min = "0" ref = {this.productCountRef}/>
              total: <input type = "number" step="0.01" min = "0" ref = {this.totalRef}/>
              grandTotal: <input type = "number" step="0.01" min = "0" ref = {this.grandTotalRef}/>
              {this.productIdTags}
              Add Product Id: <input type = "number" step="1" min = "0" ref = {this.productListRef}/>

              <button type="button" onClick = {this.onClickAddProduct} > ADD </button>
              <button type="submit" > SUBMIT </button>
              <button type="reset" > RESET </button>
              </form>
            </div>
        )
    }

    onSubmit = (event) => {

        event.preventDefault();

        let cart = {}
        

        //cart.cartId = this.cartIdRef.current.value;
        cart.productCount = this.productCountRef.current.value;
        cart.total = this.totalRef.current.value;
        cart.grandTotal = this.grandTotalRef.current.value;
        cart.listProduct = this.productIdElements;
        console.log("checking today: " +cart.listProduct)
        
        this.cartServices.addCart(cart, this.responseCallback, this.errorCallback);
        
    }

    onClickAddProduct = () =>{

       this.productIdElements.push(this.productListRef.current.value)      
   
       this.props.setState({listProduct:this.productIdElements})
    }

    responseCallback = (response) => {

        alert("Cart Added");

        this.props.setState({redirectToShow:true, cartId:response.data.cartId})


    }

    errorCallback = (error) => {

        this.props.setState({message:error.response.data})


    }

    renderProductIds = () => {

        this.productIdTags = this.props.state.listProduct.map(

            (productId , index) =>  <div key = {productId}> {productId} <button type ="button" onClick = {this.onClickRemoveProductId.bind(this,index)}>REMOVE</button></div>


        )
    }

    onClickRemoveProductId = (index, event) => {
     
        this.productIdElements.splice(index , 1)      
   
        this.props.setState({listProduct:this.productIdElements})

       
    } 

    onReset = () => {

        this.productIdElements = []      
   
        this.props.setState({listProduct:this.productIdElements , message:""})


    }


}

export default AddCartComponent;

























































// import react from 'react';

// export default class AddCartComponent extends React.Component {

//  constructor(props) {
//      super(props);
//      this.onIdChange = this.onIdChange.bind(this);



//  }   

// }