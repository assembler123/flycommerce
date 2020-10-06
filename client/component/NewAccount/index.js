import React,{Fragment} from 'react';
const Welcome = (props) =>{
    return(
      <Fragment>
      <h1>Welcome to fly commerce dashboard</h1>
      <ul>
        <li>You can Add Products</li>
        <li>Delete Products</li>
        <li>Edit Products</li>
        <li>Review/Edit Stock info</li>
        <li>Access The dashboard with info like profits, trends, traffic etc.</li>
      </ul>
      </Fragment>
    );
}
export default Welcome;