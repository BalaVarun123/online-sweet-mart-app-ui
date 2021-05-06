import React from "react";
import { connect } from "react-redux";

 class Dashboard extends React.Component {
    render(){
        return <h1 >Hello {localStorage.getItem("userDetails").username}</h1>
    }
}

const mapStateToProps = (state,props) =>{
    return {
        //redirectTo
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)