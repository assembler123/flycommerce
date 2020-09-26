import React from 'react';
import './index.css';
import {Button,Container,Header,Icon} from 'semantic-ui-react';
const Land = (props) => {
    return (
        <Container text>
            <Header
                as='h1'
                content='Imagine-a-Company'
                
                style={{fontSize:'4em'}}    
            ></Header>
            <Header
                as='h2'
                content='Do whatever you want when you want to.'
                ></Header>
            <Button primary size='huge'>Get Started
            <Icon position='right' name='right arrow' /></Button>
        </Container>
    )
}
export default Land;