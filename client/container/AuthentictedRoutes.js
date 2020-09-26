import React from 'react';
import {Redirect} from 'react-router-dom';
const AuthenticatedRoutes = (props) => {
    const isAuth = false;//No check as of now
    return isAuth?<props.component/>:<Redirect to='/login'/>
}
export default AuthenticatedRoutes;