import React from 'react';
import AddCartComponent from './AddCartComponent';
import { connect } from 'react-redux';

import { addCart } from '../../actions/CartActions';
import reactDom from 'react-dom';
import { Redirect } from 'react-router';

class AddCart extends React.Component{

    constructor(props){
        super(props);
    
        this.state = {
    
            // cart:{

            //     cartId:0,
            //     productCount:0,
            //     total:0,
            //     grandTotal:0,
            //     listProduct:[]
    
            // }, 
            redirectToShow:false,
            listProduct:[],
            message:"",
            cartId: -1
    
    }
}
    render(){
          
        if(this.state.redirectToShow){

            return <Redirect to = {"/cart/show-cart-by-id/" +this.state.cartId}/>
        }
        
        return <AddCartComponent state={this.state} setState={p=>{this.setState(p)}}/>
    }


}

export default AddCart;















































// import React from 'react';
// import AddCartComponent from './AddCartComponent';
// import { connect } from 'react-redux';
// import { addCart } from '../../actions/CartActions';

// const AddCart = (props) => (

//     <div>
//         <h2> Set Cart information </h2>
//         <AddCartComponent

//         onSubmitCart={(cart) => {
//             props.dispatch(addCart(cart));
//             props.history.push('/');
//         }}
//     />
//     </div>

// );

// export default connect()(AddCart);