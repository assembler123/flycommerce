import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon } from 'semantic-ui-react'
ReactDOM.render((<div>
    <Button icon labelPosition='left'>
      <Icon name='pause' />
      Pause
    </Button>
    <Button icon labelPosition='right'>
      Next
      <Icon name='add circle' />
    </Button>
  </div>), document.getElementById('app'));