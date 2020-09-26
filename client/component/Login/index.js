import React,{useState} from 'react';
import logo from '../../../public/assets/logo.png'
import login_request from './login';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Redirect } from 'react-router';
import {connect} from 'react-redux'
const Login = (props) => {
    const [id,setId] = useState('');
    const [password,setPass] = useState('');
    if(props.auth)
    {
      return <Redirect to='/manage'></Redirect>
    }
    return (<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image className="img-logo" src={logo} /> 
      </Header>
      <Form size='large'>
        <Segment stacked>
            <h4>Login to the pannel for existing account</h4>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail or mobile' onChange={e=>{setId(e.target.value)}} value={id} />
          <Form.Input fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            value={password}
            onChange={e=>{setPass(e.target.value)}}
          />

          <Button color="Green" fluid size='large' onClick={()=>{
            props.login(id,password);
          }}
          disabled={props.login_req}
          >
            {props.login_req?"Loading":"Login"}
          </Button>
          {props.login_fail?props.err_msg==='401'?
          <Message color='red'>Wrong credentials</Message>:
          <Message color='red'>No such user</Message>:null}
        </Segment>
      </Form>
      <Message>
        New user? <a href='#'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>)

}
const mapStateToProps = (state) => {
  return state.DataReducer
}
const mapDispatchToProps = (dispatch) => {
  return{  login : (id,password) => {
    dispatch(login_request({id,password}))
  }
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);