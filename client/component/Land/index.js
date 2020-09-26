import React from 'react';
import './index.css';
import LandingTop from './LandingTop';
import LandingBanner from '../../../public/assets/Landing.png'
import {Button,Container,Header,Icon, Grid} from 'semantic-ui-react';
const Land = (props) => {
    return (
            <Container fluid>
                <LandingTop></LandingTop>
            <Container inverted>
            <Grid>
                <Grid.Row>
                <Grid.Column width={9} style={{padding:'6em 0em'}}>
                    <Header
                        as='h1'
                        content='Start Selling Online'
                        style={{fontSize:'3em'}}    
                    ></Header>
                    <Header
                        as='h2'
                        content='Growing marketplace with advance features and analytics options.'
                        ></Header>
                    <Button primary size='huge'>Get Started
                    <Icon name='right arrow' /></Button>
                </Grid.Column >
                <Grid.Column width={7}>
                    <img src={LandingBanner}></img>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
        </Container>
    )
}
export default Land;