import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddSweetItem from '../../components/SweetItemComponents/AddSweetItem';
import ListSweetItem from '../../components/SweetItemComponents/ListSweetItem';
import SweetItem from '../../components/SweetItemComponents/SweetItem';
import ShowSweetItem from '../../components/SweetItemComponents/ShowSweetItem';
import UpdateSweetItem from '../../components/SweetItemComponents/UpdateSweetItem';


const SweetItemRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Switch>
            <Route path="/sweet-item/add" component={AddSweetItem} exact/>
            <Route path="/sweet-item/update/:id" component={UpdateSweetItem} exact/>
            <Route path="/sweet-item/show-all" component={ListSweetItem} exact/>
            <Route path="/sweet-item/show/:id" component={ShowSweetItem} exact/>
            <Route path="/sweet-item" component={SweetItem} exact/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default SweetItemRouter;