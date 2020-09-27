import React, { useState } from 'react';
import { Button, Form, Grid, Header, Image, Select , Segment, Item } from 'semantic-ui-react';
const Page2 = (props) =>{
    const [p1,setPass] = useState({p:'',cp:''});
    const [err,setErr] = useState(null)
    const toNextPage=(e)=>{ 
      e.preventDefault()
      if(p1.p!==p1.cp)
      {
        setErr("Password doesn't matches")
      }
      else
      {
        props.next("done");
      }
    }
    const setValue = (e) => {
      if(e.target.name==='p')
      {
        props.setPass(e.target.value);
      }
      let pass = Object.assign({},p1) ;
      pass[e.target.name] = e.target.value;
      setErr(null)
      setPass(pass);      
    }
    return(
    <Form size='large'>
    <Segment stacked>
        <h4>Set A Password</h4>
      <Form.Input placeholder='Password' type='password' name='p' onChange={setValue} required />
      <Form.Input placeholder='Confirm Password' type='password' name='cp' onChange={setValue} required error={err}/>
      <Button color="Green" fluid size='large' onClick={toNextPage} >
        Done
      </Button>
    </Segment>
  </Form>);
}
export default Page2;