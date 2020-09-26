import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
const AuthenticatedRoutes = (props) => {
    const isAuth = props.auth;//No check as of now
    return isAuth?<props.component/>:<Redirect to='/login'/>
}
const mapStateToProps = (state) => {
    return state.DataReducer;
}
export default connect(mapStateToProps)(AuthenticatedRoutes);