import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
const Page1 = (props) =>{
    const toNextPage=()=>{
        console.log();
        props.next(1);
    }
    const setValue = (e) => {
        console.log(e.target.value);
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
        console.log(props.id);
        console.log(props.name);
    }
    return(
    <Form size='large'>
    <Segment stacked>
        <h4>Create A new seller account</h4>
      <Form.Input placeholder='E-mail or mobile' name='id' onChange={setValue} />
      <Form.Input placeholder='First Name' name='fName' onChange={setValue} />
      <Form.Input placeholder='Last Name' name='lName' onChange={setValue} />
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