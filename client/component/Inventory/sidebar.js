import React from 'react';
import {Sidebar, Menu, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import logo from '../../../public/assets/logo.png';
const Side = () => {
    return (

        <Sidebar as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            vertical
            visible
            width='thin'>
            
            <Link to='/'>
                <Menu.Item as='a'>
                <img src={logo} width='100%'></img>
                </Menu.Item>
            </Link>
            
            <Link to='/product'>
                <Menu.Item as='a'>
                    <Icon name='bar'/>
                    Products
                </Menu.Item>
            </Link>
            <Link to='/inventory/add'>
                <Menu.Item as='a'>
                    <Icon name='add'/>
                    Add Product
                </Menu.Item>
            </Link>
            <Link to='/inventory/category'>
                <Menu.Item as='a'>
                    <Icon name='add'/>
                    Add Category
                </Menu.Item>
            </Link>
            <Link to='/inventory/subcategory'>
                <Menu.Item as='a'>
                    <Icon name='add'/>
                    Add Subcategory
                </Menu.Item>
            </Link>
        </Sidebar>
    );
};

export default Side;
