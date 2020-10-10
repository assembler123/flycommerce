import React from 'react';
import {Header, Input,Grid, Message} from 'semantic-ui-react';

const Category = () => {
    return (
            <Grid textAlign='center'
                style={
                    {height: '100vh'}
                }>
                <Grid.Column style={
                    {maxWidth: 600}
                }>
                    <Header as='h3'>Add Category</Header>
                    <Message warning>Before adding category search and check for existing category or similar</Message>
                    <Input icon='search' placeholder='Search...'/>
                </Grid.Column>
            </Grid>
    );
};

export default Category;
