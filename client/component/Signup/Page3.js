import React from 'react';
import { Button, Form, Grid, Header, Image, Select , Segment } from 'semantic-ui-react';
import statesOpt from '../../../public/IndianStates'
const Page2 = (props) =>{
    console.log(statesOpt);
    const toNextPage=()=>{
        console.log();
        props.next(3);
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
        <h4>Set A Password</h4>
      <Form.Input placeholder='Password' />
      <Form.Input placeholder='Confirm Password' />
      <Button color="Green" fluid size='large' onClick={toNextPage}>
        Done
      </Button>
    </Segment>
  </Form>);
}
export default Page2;