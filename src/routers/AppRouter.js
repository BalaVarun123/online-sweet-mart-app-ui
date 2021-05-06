import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginContainer from '../components/LoginComponents/LoginContainer';
import AdminRouter from './AdminRouters/AdminRouter';
import OrderBillRouter from './OrderBillRouters/OrderBillRouter';
import CartRouter from './CartRouters/CartRouter';
import ProductRouter from './ProductRouters/ProductRouter';
import SweetOrderRouter from './SweetOrderRouters/SweetOrderRouter';
import DashBoard from "../components/pages/Dashboard";
import CustomerRouter from './CustomerRouters/CustomerRouter';
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
                <Route path="/order-bill" component={OrderBillRouter}/>
                <Route path="/login" component={LoginContainer} exact/>
                <Route path="/cart" component={CartRouter}/>
                <Route path="/product" component={ProductRouter}/>
                <Route path="/sweet-order" component={SweetOrderRouter}/>
                <Route path = "/customer" component = {CustomerRouter}/>
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