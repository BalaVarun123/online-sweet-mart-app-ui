import React from "react";
import { connect } from "react-redux";
import AddOrderBillComponent from "./AddOrderBillComponent";
class AddOrderBill extends React.Component{
    render(){
        return <div>
            <h2>OrderBill</h2>
            <br/>
            <AddOrderBillComponent/>
        </div>
    }
}

export default AddOrderBill;