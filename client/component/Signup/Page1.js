import React, { useState } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
const Page1 = (props) =>{
    const [err,setErr] = useState({eId:null,eFName:null,eLName:null})
    const toNextPage=(e)=>{
      e.preventDefault()
      let errObj = Object.assign({},err);
      if(props.id === '')
      {
        errObj.eId = "Email or Mobile Number is required"
      }
      else if(props.name.fName === '')
      {
        errObj.eId = null
        errObj.eFName = "First Name is required"
      }
      else if(props.name.lName === '')
      {
        errObj.eId = null
        errObj.eFName = null
        errObj.eLName = "Last Name is required"
      }
      else
      {
        props.next(1);
      }
      setErr(errObj)
    }
    const setValue = (e) => {
        if(e.target.name === 'id')
        {
            props.setId(e.target.value);            
        }
        else
        {
            let obj = props.name;
            obj[e.target.name] = e.target.value;
            props.setName(obj);
        }
        setErr({eId:null,eFName:null,eLName:null})
    }
    const validateFields = () => {
      return false;
    }
    return(
    <Form size='large'>
    <Segment stacked>
        <h4>Create A new seller account</h4>
      <Form.Input placeholder='E-mail or mobile' name='id' onChange={setValue} error={err.eId}/>
      <Form.Input placeholder='First Name' name='fName' onChange={setValue}  error={err.eFName}/>
      <Form.Input placeholder='Last Name' name='lName' onChange={setValue} error={err.eLName}/>
      <Button color="Green" fluid size='large' onClick={toNextPage}>
        Signup
      </Button>
    </Segment>
  </Form>);
}
Page1.propTypes={
  id:PropTypes.string
}
export default Page1;