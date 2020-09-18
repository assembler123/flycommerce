import React from 'react';
import { Route , Switch ,BrowserRouter as  Router} from 'react-router-dom';
const Routes = () => (<Router>
                        <Switch>
                            <Route exact path='/'  render={()=><h1>Hello flycommerce</h1>}/>
                        </Switch>
                    </Router>);
export default Routes;