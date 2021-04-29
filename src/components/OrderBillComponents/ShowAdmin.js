import React from "react";

import { connect } from "react-redux";
import ShowOrderBillComponent from "./ShowOrderBillComponent";


class ShowOrderBill extends React.Component{
    render(){
        return <div>
            <h2>ShowOrderBill</h2>
            <br/>
            <ShowOrderBillComponent/>
        </div>
    }
}
export default ShowOrderBill;