import React from "react";
import { Link, Redirect } from "react-router-dom";
import ListOrderBill from "./ListOrderBill";

class OrderBill extends React.Component{
    render(){
        return <div>
            <Redirect to =  "/order-bill/show-all"/>
        </div>
    }
}


export default OrderBill;