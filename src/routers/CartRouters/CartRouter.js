import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CartList from '../../components/CartComponents/CartList';
import Cartdetail from '../../components/CartComponents/CartDetail';
import AddCart from '../../components/CartComponents/AddCart';
import UpdateCart from '../../components/CartComponents/UpdateCart';


const CartRouter = () => (
    <BrowserRouter>
     <div className='container'>
        <Switch>

            <Route path={`/cart/add-cart`} component = {AddCart}/>
            <Route path={`/cart/update-cart`} component = {UpdateCart}/>
            <Route path={`/cart/show-all-carts`} component={CartList}/>
            <Route path={`/cart/show-cart-by-id/:cId`} exact component={Cartdetail} />
           
            
        </Switch>
        </div>
    </BrowserRouter>
);

export default CartRouter;





























  {/* <Route path='/' component={Home} exact />
            <Route path={`/admin-dashboard`} component={AdminDashBoard} />
            <Route path={`/users-dashboard`} component={UsersDashBoard} /> */}