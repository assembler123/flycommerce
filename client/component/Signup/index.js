import React,{useState,useEffect,Fragment} from 'react';
import logo from '../../../public/assets/logo.png'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import {connect} from 'react-redux';
import signup_request from './signup';
import Helmet from 'react-helmet';
import { Redirect } from 'react-router';

const Signup = (props) => {
    const [id,setId] = useState('');
    const [name,setName] = useState({fName:'',lName:''});
    const [contact,setContact] = useState({gst:'',state:'',pin:''});
    const [password,setPass] = useState('');
    const [next,navigateNext] = useState(0);
    
    if(props.signup_err){
      navigateNext(0);
    }
    useEffect(()=>{
      console.log(next);
      if(next==="done"){
        let obj = {id,...name,password,...contact};
        props.signupReq(obj);
      }
    },[next])
    if(props.signup)
    {
      return <Redirect to='/login/new_user'></Redirect>
    }
    return (
    <Fragment>
    <Helmet><title>Register New Seller </title></Helmet>
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image className="img-logo" src={logo} /> 
      </Header>
      {next===0?<Page1 next={navigateNext} setName={setName} setId={setId} id={id} name={name} signup_err={props.signup_err}/>:next===1?<Page2 next={navigateNext} setContact={setContact} contact={contact}/>:<Page3 next={navigateNext} password={password} setPass={setPass}/>}
    </Grid.Column>
  </Grid>
  </Fragment>)

}
const mapStateToProps = (state) => {
  return state.DataReducer;
}
const mapDispatchToProps = (dispatch) => {
  return {
    signupReq : (formData) => {
      dispatch(signup_request(formData));
    } 
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Signup);