import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddProduct from '../../components/ProductComponents/AddProduct';
import ProductList from '../../components/ProductComponents/ProductList';
import ProductDetails from '../../components/ProductComponents/ProductDetails';
import UpdateProduct from '../../components/ProductComponents/UpdateProduct';
const ProductRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Switch>
            <Route path="/product/add" component={AddProduct} exact/>
            <Route path="/product/update/:ID" component={UpdateProduct} exact/>
            <Route path={"/product/show-all"} component={ProductList}/>
            <Route path={"/product/show-by-id/:ID"} exact component={ProductDetails} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default ProductRouter;