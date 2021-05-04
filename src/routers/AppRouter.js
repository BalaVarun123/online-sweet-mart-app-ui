import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginContainer from '../components/LoginComponents/LoginContainer';
import AdminRouter from './AdminRouters/AdminRouter';
import OrderBillRouter from './OrderBillRouters/OrderBillRouter';
<<<<<<< HEAD
import ProductRouter from './ProductRouters/ProductRouter'
=======
import CartRouter from './CartRouters/CartRouter';
>>>>>>> fad970366488fc97f1d44895697ca0013dcb7495


const AppRouter = () => (
    <BrowserRouter>
        <div className='container'>
            {/*<Header />*/}
            <Switch>
                <Route path="/" component={LoginContainer} exact/>
                <Route path="/admin" component={AdminRouter}/>
                <Route path="/order-bill" component={OrderBillRouter}/>
                <Route path="/login" component={LoginContainer} exact/>
<<<<<<< HEAD
                <Route path="/product" component={ProductRouter}/>
=======

                <Route path="/cart" component={CartRouter}/>
                
>>>>>>> fad970366488fc97f1d44895697ca0013dcb7495
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;