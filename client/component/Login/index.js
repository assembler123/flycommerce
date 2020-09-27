import React,{useState, Fragment} from 'react';
import logo from '../../../public/assets/logo.png'
import login_request from './login';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Redirect } from 'react-router';
import {useParams} from 'react-router'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'
const Login = (props) => {
    const {user_type} = useParams();
    const [id,setId] = useState('');
    const [password,setPass] = useState('');
    console.log(user_type,props);
    if(props.auth)
    {
      return <Redirect to='/manage'></Redirect>
    }
    return (<Fragment>
    <Helmet><title>Login to seller pannel</title></Helmet>
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      {user_type === 'new_user'?<Message>Login to access the pannel</Message>:null}
      <Header as='h2' color='teal' textAlign='center'>
        <Image className="img-logo" src={logo} /> 
      </Header>
      <Form size='large'>
        <Segment stacked>
            <h4>Login to the pannel for existing account</h4>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail or mobile' onChange={e=>{setId(e.target.value)}} value={id} required/>
          <Form.Input fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            value={password}
            onChange={e=>{setPass(e.target.value)}}
            required
          />

          <Button color="Green" fluid size='large' onClick={()=>{
            if(id!==''&&password!=='')
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
  </Grid></Fragment>)

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