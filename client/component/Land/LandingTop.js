import React from 'react';
import {Menu,Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import logo from '../../../public/assets/logo.png';
const LandingTop = () => (
    <Menu secondary>
        <Menu.Item ><img className='img-logo' src={logo} width='100%'></img></Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item><Link to='/login'><Button positive>Login</Button></Link></Menu.Item>
            <Menu.Item><Link to='/signup'><Button>Signup</Button></Link></Menu.Item>
        </Menu.Menu>
    </Menu>
)
export default LandingTop;