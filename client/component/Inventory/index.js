import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import Sidebar from './sidebar'
import { useParams } from 'react-router';
import Category from '../Category';
import Subcategory from '../Subcategory';
import AddProduct from '../AddProduct';
const Inventory = () => {
    const {type} = useParams();
    console.log(type,useParams());
    
    return (
        <Container>
            <Sidebar></Sidebar>
            <Header as='h1' textAlign='center' >Inventroy Management</Header>
            {type==='category'?<Category></Category>:null}
            {type==='subcategory'?<Subcategory></Subcategory>:null}
            {type==='add'?<AddProduct></AddProduct>:null}
        </Container>
    );
};

export default Inventory;