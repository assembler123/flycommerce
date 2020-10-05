import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';
import 'semantic-ui-css/semantic.min.css'
import '../public/css/index.css'
ReactDOM.hydrate( <App/> , document.getElementById('app'));