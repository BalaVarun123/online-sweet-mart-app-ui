import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddCategory from '../../components/CategoryComponents/AddCategory';
import ListCategory from '../../components/CategoryComponents/ListCategory';
import Category from '../../components/CategoryComponents/Category';
import ShowCategory from '../../components/CategoryComponents/ShowCategory';
import UpdateCategory from '../../components/CategoryComponents/UpdateCategory';



const CategoryRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Switch>
            <Route path="/category/add" component={AddCategory} exact/>
            <Route path="/category/update/:id" component={UpdateCategory} exact/>
            <Route path="/category/get-all" component={ListCategory} exact/>
            <Route path="/category/show/:id" component={ShowCategory} exact/>
            <Route path="/category" component={Category} exact/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default CategoryRouter;