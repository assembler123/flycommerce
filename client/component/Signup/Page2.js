import React from 'react';
import { Button, Form, Grid, Header, Image, Select , Segment } from 'semantic-ui-react';
import statesOpt from '../../../public/IndianStates'
const Page2 = (props) =>{
    console.log(statesOpt);
    const toNextPage=()=>{
        props.next(2);
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
        <h4>Just Little More Info!</h4>
        <Form.Input placeholder='' />
        <Form.Input placeholder='GSTIN' />
        <Select fluid style={{margin:'0 0 1em'}} placeholder='State' options={statesOpt}/>
        <Form.Input placeholder='Pin Code' />
        <Button color="Green" fluid size='large' onClick={toNextPage}>
          Create Account
        </Button>
    </Segment>
  </Form>);
}
export default Page2;