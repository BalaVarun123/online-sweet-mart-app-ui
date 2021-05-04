import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddProduct from '../../components/ProductComponents/AddProduct'
const ProductRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Switch>
            <Route path="/product/add" component={AddProduct} exact/>
            
            </Switch>
        </div>
    </BrowserRouter>
);

export default ProductRouter;