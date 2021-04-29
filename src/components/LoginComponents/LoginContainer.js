import React from "react";

export default class LoginComponent extends React.Component{
    render(){
        return <React.Fragment>
            <LoginComponent/>
        </React.Fragment>
    }
}


const mapStateToProps = state => {
    return {
      numOfCakes: state.cake.numOfCakes
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      buyCake: () => dispatch(buyCake())
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CakeContainer)
  