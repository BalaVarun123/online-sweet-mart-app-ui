import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddOrderBill from '../../components/OrderBillComponents/AddOrderBill';
import ListOrderBill from '../../components/OrderBillComponents/ListOrderBill';
import OrderBill from '../../components/OrderBillComponents/OrderBill';
import ShowOrderBill from '../../components/OrderBillComponents/ShowOrderBill';
import UpdateOrderBill from '../../components/OrderBillComponents/UpdateOrderBill';


const OrderBillRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Switch>
            <Route path="/order-bill/add" component={AddOrderBill} exact/>
            <Route path="/order-bill/update/:id" component={UpdateOrderBill} exact/>
            <Route path="/order-bill/show-all" component={ListOrderBill} exact/>
            <Route path="/order-bill/show/:id" component={ShowOrderBill} exact/>
            <Route path="/order-bill" component={OrderBill} exact/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default OrderBillRouter;