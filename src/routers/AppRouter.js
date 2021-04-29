import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginContainer from '../components/LoginComponents/LoginContainer';
import AdminRouter from './AdminRouters/AdminRouter';
import OrderBillRouter from './OrderBillRouters/OrderBillRouter';


const AppRouter = () => (
    <BrowserRouter>
        <div className='container'>
            {/*<Header />*/}
            <Switch>
                <Route path="/" component={LoginContainer} exact/>
                <Route path="/admin" component={AdminRouter}/>
                <Route path="/order-bill" component={OrderBillRouter}/>
                <Route path="/login" component={LoginContainer} exact/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;