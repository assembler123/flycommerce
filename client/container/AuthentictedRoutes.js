import React from 'react';
import {Redirect,Route} from 'react-router-dom';
import {connect} from 'react-redux';
const AuthenticatedRoutes = (props) => {
    const isAuth = props.auth;//No check as of now
    return isAuth?<Route {...props} ><props.component/></Route>:<Redirect to='/login'/>
}
const mapStateToProps = (state) => {
    return state.DataReducer;
}
export default connect(mapStateToProps)(AuthenticatedRoutes);