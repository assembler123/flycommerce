import React from 'react';
import { Route , Switch ,BrowserRouter as  Router} from 'react-router-dom';
import Login from '../component/Login';
import Signup from '../component/Signup'
import Landing from './Landing.jsx';
import Manage from '../component/NewAccount';
import AuthenticatedRoutes from './AuthentictedRoutes';

const Routes = () => (<Router>
                        <Switch>
                            <Route exact path='/' component={Landing}/>
                            <Route exact path='/login' component={Login}/>
                            <Route exact path='/signup' component={Signup}/>

                            <AuthenticatedRoutes path='/manage' component={Manage}></AuthenticatedRoutes>
                        </Switch>
                    </Router>);
export default Routes;