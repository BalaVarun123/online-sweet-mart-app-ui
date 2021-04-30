import React from "react";
import { Link } from "react-router-dom";
import ListOrderBill from "./ListOrderBill";

class OrderBill extends React.Component{
    render(){
        return <div>
            <h2>OrderBill</h2>
            <br/>
            <ListOrderBill/>
        </div>
    }
}


export default OrderBill;