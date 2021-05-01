import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddAdmin from '../../components/AdminComponents/AddAdmin';
import Admin from '../../components/AdminComponents/Admin';
import ListAdmin from '../../components/AdminComponents/ListAdmin';
import ShowAdmin from '../../components/AdminComponents/ShowAdmin';
import UpdateAdmin from '../../components/AdminComponents/UpdateAdmin';

const AdminRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Switch>
            <Route path="/admin/add" component={AddAdmin} exact/>
            <Route path="/admin/update/:id" component={UpdateAdmin} exact/>
            <Route path="/admin/show-all" component={ListAdmin} exact/>
            <Route path="/admin/show/:id" component={ShowAdmin} exact/>
            <Route path="/admin" component={Admin} exact/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AdminRouter;