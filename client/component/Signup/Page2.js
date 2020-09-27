import React, { useState } from 'react';
import { Button, Form, Select , Segment } from 'semantic-ui-react';
import statesOpt from '../../../public/IndianStates'
const Page2 = (props) =>{
    const [err,setErr]=useState({eGst:null,eState:null,ePin:null})
    const toNextPage = (e) => {
        e.preventDefault()    
        let er = Object.assign({},err);
        let c = props.contact;
        if(c.gst === '')
            er.eGst = "GST Number is required";
        else if(c.state === '')
            er.eState = "Select a State";
        else if(c.pin === '')
            er.ePin = "Enter Your Pin Code"; 
        else
            props.next(2);
        setErr(er)
    }
    const setValue = (e,d) => {
        let c = Object.assign({},props.contact)
        c[d.name] = d.value;
        props.setContact(c);
    }
    return(
    <Form size='large'>
    <Segment stacked>
        <h4>Just Little More Info!</h4>
        <Form.Input placeholder='GSTIN' name='gst' onChange={setValue} error={err.eGst} />
        <Select fluid style={{margin:'0 0 1em'}} placeholder='State' name='state' onChange={setValue} options={statesOpt} error={err.eState}/>
        <Form.Input placeholder='Pin Code' name='pin' onChange={setValue} error={err.ePin}/>
        <Button color="Green" fluid size='large' onClick={toNextPage}>
          Create Account
        </Button>
    </Segment>
  </Form>);
}
export default Page2;