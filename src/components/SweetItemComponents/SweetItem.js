import React from "react";
import { Redirect } from "react-router-dom";

class SweetItem extends React.Component{
    render(){
        return <div>
            <Redirect to =  "/sweet-Item/show-all"/>
        </div>
    }
}



export default SweetItem;