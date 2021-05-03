import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { showCartById } from "../../actions/CartActions";

const CartDetail = () => {
    const cart = useSelector((state) => state.cart);

    const {cartId, productCount, listProduct, total, grandTotal} = cart;

    const {cId} = useParams();

    //const dispatch = useDispatch();

    console.log(cId);

    const fetchCartDetail = () => showCartById(cId);

    useEffect(() => {
        if(cId && cId != "") 
           fetchCartDetail();
    }, [cId]);

    return (
        <div className="ui grid container">
          {Object.keys(cart).length === 0 ? (
            <div>...Loading</div>
          ) : (
            <div className="ui placeholder segment">
              <div className="ui two column stackable center aligned grid">
                <div className="ui vertical divider">AND</div>
                <div className="middle aligned row">
                  <div className="column lp">
                    <img className="ui fluid image" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.moneycrashers.com%2Ftips-tenant-landlords-find-apartment%2F&psig=AOvVaw3XAVGNx2oYpJG2jY0DM2mC&ust=1620038368910000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCh57HnqvACFQAAAAAdAAAAABAD" alt="Tenant Image"/>
                  </div>
                  <div className="column rp">
                    <h1>{cartId}</h1>
                    <h1>{productCount}</h1>
                    <h2>{listProduct}</h2>
                    <p>{total}</p>
                    <p>{grandTotal}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
    );
};

export default CartDetail;