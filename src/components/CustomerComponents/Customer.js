import React from "react";
import { Link } from "react-router-dom";
import ListCustomer from "./ListCustomer";

class Customer extends React.Component{
    render(){
        return <div>
            <h2>Customer</h2>
            <br/>
            <ListCustomer/>
        </div>
    }
}


export default Customer;