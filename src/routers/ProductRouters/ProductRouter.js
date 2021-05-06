import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddProduct from '../../components/ProductComponents/AddProduct';
import ProductList from '../../components/ProductComponents/ProductList';
import UpdateProduct from '../../components/ProductComponents/UpdateProduct';
import ShowProduct from '../../components/ProductComponents/ShowProduct';
import Product from '../../components/ProductComponents/Product';
const ProductRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Switch>
            <Route path="/product/add" component={AddProduct} exact/>
            <Route path="/product/update/:id" component={UpdateProduct} exact/>
            <Route path="/product/show-all" component={ProductList}/>
            <Route path="/product/show-by-id/:id" exact component={ShowProduct} />
            <Route path="/product" component={Product} exact/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default ProductRouter;