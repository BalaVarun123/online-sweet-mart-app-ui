import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShowSweetOrder from '../../components/SweetOrderComponents/ShowSweetOrder';
const SweetOrderRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Switch>
            {/*<Route path="/sweet-order/add" component={AddSweetOrder} exact/>*/}
            {/*<Route path="/sweet-order/update/:id" component={UpdateSweetOrder} exact/>*/}
            {/*<Route path="/sweet-order/show-all" component={ListSweetOrder} exact/>*/}
            <Route path="/sweet-order/show/:id" component={ShowSweetOrder} exact/>
            {/*<Route path="/sweet-order" component={SweetOrder} exact/>*/}
            </Switch>
        </div>
    </BrowserRouter>
);

export default SweetOrderRouter;