import React,{useState,useEffect} from 'react';
import logo from '../../../public/assets/logo.png'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
const Signup = () => {
    const [id,setId] = useState('');
    const [name,setName] = useState({fName:'',lName:''});
    const [next,navigateNext] = useState(0);
    useEffect(()=>{
      console.log(next);
      if(next===3)
      {
        alert("Done!");
      }
    },[next])
    return (<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image className="img-logo" src={logo} /> 
      </Header>
      {next===0?<Page1 next={navigateNext} setName={setName} setId={setId} id={id} name={name}/>:next===1?<Page2 next={navigateNext}/>:<Page3 next={navigateNext}/>}
    </Grid.Column>
  </Grid>)

}
export default Signup;