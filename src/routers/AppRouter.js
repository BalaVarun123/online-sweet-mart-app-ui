import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import DashBoard from '../components/DashBoard';
import AddBook from '../components/AddBook';
import EditBook from '../components/EditBook';
import NotFound from '../components/NotFound';
import LoginComponent from '../components/LoginComponents/LoginComponent';

const AppRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Header />
            <Switch>
                <Route path="/" component={LoginComponent} exact/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;