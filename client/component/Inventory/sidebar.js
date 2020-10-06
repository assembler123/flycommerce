import React from 'react';
import {Sidebar, Menu, Icon} from 'semantic-ui-react'
const Side = () => {
    return (

            <Sidebar as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                vertical
                visible
                width='thin'>
                <Menu.Item as='a'>
                    <Icon name='bar'/>
                    Products
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='add'/>
                    Add Product
                </Menu.Item>

                <Menu.Item as='a'>
                    <Icon name='add'/>
                    Add Category
                </Menu.Item>

                <Menu.Item as='a'>
                    <Icon name='add'/>
                    Add Subcategory
                </Menu.Item>

            </Sidebar>
    );
};

export default Side;
