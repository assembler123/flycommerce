import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import Sidebar from './sidebar'
import { useParams } from 'react-router';
import Category from '../Category';
const Inventory = () => {
    const {type} = useParams();
    console.log(type,useParams());
    
    return (
        <Container>
            <Sidebar></Sidebar>
            <Header as='h1' textAlign='center' >Inventroy Management</Header>
            {type==='category'?<Category></Category>:null}
            {type==='sub'?<Subcategory></Subcategory>:null}
            
        </Container>
    );
};

export default Inventory;