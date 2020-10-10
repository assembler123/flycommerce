import React from 'react';
import { Input, Header, Button } from 'semantic-ui-react';

const ProductForm = () => {
    return (
        <div>
            <Header as='h3'>Add Product</Header>
            <Input></Input>
            <Input></Input>
            <Input></Input>
            <Input></Input>
            <Button>Add</Button>
        </div>
    );
};

export default ProductForm;