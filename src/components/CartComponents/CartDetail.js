import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { showCartById } from "../../actions/CartActions";
import 'bootstrap/dist/css/bootstrap.min.css'

const CartDetail = () => {
  const cart = useSelector((state) => state.cartReducer.cart);

  const { cId } = useParams();

  const dispatch = useDispatch();

  console.log("cartId:" + cId);

  const fetchCartDetail = () => showCartById(cId);

  useEffect(() => {

    dispatch(fetchCartDetail());

  }, []);

  if (cart != null) {
    console.log("checkingCartDetails:" + JSON.stringify(cart))

    const { cartId, productCount, listProduct, total, grandTotal } = cart;

    return (

      <div  >
        {Object.keys(cart).length === 0 ? (
          <div>...Loading</div>
        ) : (


          <div >

            <h1 class="list-group-item active"> CART ID: {cartId}</h1> <br /> <br />

            {listProduct.map(product => {

              return (<div key={product.productId}>

                <h2 class="ui purple segment">  PRODUCT ID: {product.productId} </h2> <br />

                <h1 class="ui purple segment"> PRODUCT COUNT:  {productCount}  </h1> <br />

                <h2 class="ui red segment"> PRODUCT NAME:  {product.name}   </h2> <br />

                <h2 class="ui pink segment"> PRICE:  {product.price} </h2>  <br />

                <h2 class="ui purple segment"> PRODUCT DESCRIPTION: {product.description} </h2> <br />

                <h2 class="ui blue segment"> AVAILABLE: {product.available + ""} </h2> <br />

                <h2 class="ui green segment"> CATEGORY ID: {product.category.categoryId}  </h2> <br />

                <h2 class="ui yellow segment"> CATEGORY NAME: {product.category.name}  </h2> <br />

                <h2 class="ui teal segment" > TOTAL: {total}  </h2>  <br />

                <h1 class="ui olive segment"> GRAND TOTAL: {grandTotal} </h1> <br />

                <br /> <br />

              </div>)
            })
            }

          </div>

        )}
      </div>
    );
  }
  else {
    return <p> please wait</p>
  }
};



export default CartDetail;

































{/* <h2 >Photopath: {product.photopath} <br /> </h2> */ }