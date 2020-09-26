import React,{useState} from 'react';
import logo from '../../../public/assets/logo.png'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
const Login = () => {
    const [id,setId] = useState('');
    const [pass,setPass] = useState('');
    return (<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image className="img-logo" src={logo} /> 
      </Header>
      <Form size='large'>
        <Segment stacked>
            <h4>Login to the pannel for existing account</h4>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail or mobile' />
          <Form.Input fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color="Green" fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New user? <a href='#'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>)

}
export default Login;