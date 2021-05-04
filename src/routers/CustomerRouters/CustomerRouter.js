import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddCustomer from '../../components/CustomerComponents/AddCustomer';
import ListCustomer from '../../components/CustomerComponents/ListCustomer';
import Customer from '../../components/CustomerComponents/Customer';
import ShowCustomer from '../../components/CustomerComponents/ShowCustomer';
import UpdateCustomer from '../../components/CustomerComponents/UpdateCustomer';


const CustomerRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Switch>
            <Route path="/customer/add" component={AddCustomer} exact/>
            <Route path="/customer/update/:id" component={UpdateCustomer} exact/>
            <Route path="/customer/show-all" component={ListCustomer} exact/>
            <Route path="/customer/show/:id" component={ShowCustomer} exact/>
            <Route path="/customer" component={Customer} exact/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default CustomerRouter;