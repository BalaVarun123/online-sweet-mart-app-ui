import React from "react";

import { connect } from "react-redux";
import UpdateOrderBillComponent from "./UpdateOrderBillComponent";



class UpdateOrderBill extends React.Component{
    render(){
        return <div>
            <h2>UpdateAdmin</h2>
            <br/>
            <UpdateOrderBillComponent/>
        </div>
    }
}

export default UpdateOrderBill;
