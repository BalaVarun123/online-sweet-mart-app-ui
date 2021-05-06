import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginContainer from '../components/LoginComponents/LoginContainer';
import AdminRouter from './AdminRouters/AdminRouter';
import OrderBillRouter from './OrderBillRouters/OrderBillRouter';
import CartRouter from './CartRouters/CartRouter';
import ProductRouter from './ProductRouters/ProductRouter';
import SweetOrderRouter from './SweetOrderRouters/SweetOrderRouter';
import CategoryRouter from './CategoryRouters/CategoryRouter';

import DashBoard from "../components/pages/Dashboard";
import CustomerRouter from './CustomerRouters/CustomerRouter';
import SweetItemRouter from './SweetItemRouters/SweetItemRouter';

import { connect } from 'react-redux';
import  NotFound from '../components/pages/NotFound';
import { setLoginState } from '../actions/LoginActions';
import NavBar from '../components/layout/NavBar';
const AppRouter = (props) => {
    return (<BrowserRouter>
        <div className='container'>
            {props.isLoggedIn && <NavBar/>}
            <Switch>
                {!props.isLoggedIn && <Route path="/" component={LoginContainer} exact/>}
                {props.isLoggedIn && <Route path="/" component={DashBoard} exact/>}
                { props.isLoggedIn &&
                <Route path="/admin" component={AdminRouter}/>
                }
                {props.isLoggedIn && <Route path="/order-bill" component={OrderBillRouter}/>}
                {props.isLoggedIn && <Route path="/login" component={LoginContainer} exact/>}
                {props.isLoggedIn && <Route path="/cart" component={CartRouter}/>}
                {props.isLoggedIn && <Route path="/product" component={ProductRouter}/>}
                {props.isLoggedIn && <Route path="/sweet-order" component={SweetOrderRouter}/>}
                {props.isLoggedIn && <Route path="/category" component={CategoryRouter}/>}
                {props.isLoggedIn && <Route path = "/customer" component = {CustomerRouter}/>}
                {props.isLoggedIn && <Route path ="/sweet-item" component = {SweetItemRouter}/>}
                <Route component = {NotFound}/>
            </Switch>
        </div>
       
    </BrowserRouter>
       );
            }
const mapStateToProps = (state,props) => {
    return {
        isLoggedIn : state.login.isLoggedIn
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setLoginState : (state) =>  dispatch(setLoginState(state))
    }
}
export default connect(mapStateToProps)(AppRouter);