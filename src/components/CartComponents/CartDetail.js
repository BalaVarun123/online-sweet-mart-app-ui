import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { showCartById } from "../../actions/CartActions";
import 'bootstrap/dist/css/bootstrap.min.css'

const CartDetail = () => {
    const cart = useSelector((state) => state.cartReducer.cart);

    const {cId} = useParams();

    const dispatch = useDispatch();

    console.log("cartId:" +cId);
    
    const fetchCartDetail = () => showCartById(cId);

    useEffect(() => {
        //if(cId && cId != "") 
        dispatch (fetchCartDetail());
    }, []);

if(cart!=null){
    console.log("checkingCartDetails:"+JSON.stringify(cart))

    const {cartId, productCount, listProduct, total, grandTotal} = cart;

    return (
        <div>
          {Object.keys(cart).length === 0 ? (
            <div>...Loading</div>
          ) : (
            <div   class="list-group">
              <div  >
                 <div class="col-sm-8" >
                  <div>
                    </div>

                  <div>
                    <h1  class="list-group-item active">CartID:{cartId}</h1>
                    
                    {listProduct.map(product =>{
                     return (<div key={product.productId}  class="alert alert-primary"><h2>ProductID: {product.productId} </h2> <br/>
                    <h2 class="list-group-item list-group-item-info">ProductCount: {productCount}</h2>
                    <h2 class="list-group-item list-group-item-warning">ProductName: {product.name}<br/> </h2>
                    <h2 class="list-group-item list-group-item-danger">Price: {product.price}<br/> </h2>
                    <h2 class="list-group-item list-group-item-info">ProductDescription: {product.description}<br/> </h2>
                    <h2 class="list-group-item list-group-item-warning">Available: {product.available+"" } <br/> </h2>
                    <h2 class="list-group-item list-group-item-danger">Photopath: {product.photopath} <br/> </h2>
                    <h2 class="list-group-item list-group-item-info">CategoryId: {product.category.categoryId} <br/> </h2>
                    <h2 class="list-group-item list-group-item-warning">CategoryName: {product.category.name} <br/> </h2>
                    <h2 class="list-group-item list-group-item-danger">Total: {total} <br/> </h2>
                    <h1 class="list-group-item list-group-item-warning">GrandTotal: {grandTotal}<br/> </h1>

                    <br/> <br/>



                     </div>)})
                    }
                   
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
    );
          }
          else{
            return <p> please wait</p>
          }
};

export default CartDetail;