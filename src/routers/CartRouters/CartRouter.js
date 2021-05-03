import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CartList from '../../components/CartComponents/CartList';
import Cartdetail from '../../components/CartComponents/CartDetail';

const CartRouter = () => (
    <BrowserRouter>
     <div className='container'>
        <Switch>

            {/* <Route path='/' component={Home} exact />
            <Route path={`/admin-dashboard`} component={AdminDashBoard} />
            <Route path={`/users-dashboard`} component={UsersDashBoard} /> */}

            <Route path={`/show-all-carts`} component={CartList}/>
            <Route path={`/show-cart-by-id/:cartId`} exact component={Cartdetail} />
            
        </Switch>
        </div>
    </BrowserRouter>
);

export default CartRouter;