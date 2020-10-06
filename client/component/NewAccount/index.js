import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import { Button, Message } from 'semantic-ui-react';
const Welcome = (props) =>{
    return(
      <Fragment>
        <Message>
      <h1>Welcome to fly commerce dashboard</h1>
      <ul>
        <li>You can Add Products</li>
        <li>Delete Products</li>
        <li>Edit Products</li>
        <li>Review/Edit Stock info</li>
        <li>Access The dashboard with info like profits, trends, traffic etc.</li>
        <Link to = '/inventory'>
          <Button color='green'>Proceed</Button>
        </Link>
      </ul>
      </Message>
      </Fragment>
    );
}
export default Welcome;