import React from 'react';
import { Route , Switch } from 'react-router-dom';
import Login from '../component/Login';
import Signup from '../component/Signup'
import Landing from './Landing.jsx';
import Manage from '../component/NewAccount';
import NotFound from './NotFound.jsx';
import AuthenticatedRoutes from './AuthentictedRoutes';

const Routes = () => (
                        <Switch>
                            <Route exact path='/' component={Landing}/>
                            <Route exact path='/login' component={Login}/>
                            <Route path='/login/:user_type' component={Login}/>
                            <Route exact path='/signup' component={Signup}/>
                            <AuthenticatedRoutes path='/manage' component={Manage}></AuthenticatedRoutes>
                            <Route path='/' component={NotFound}/>
                        </Switch>
                    );
export default Routes;