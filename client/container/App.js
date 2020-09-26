import React, { Component } from 'react';
import  Routes  from "./Routes.js";
import {BrowserRouter as  Router} from 'react-router-dom';
import { Provider } from 'react-redux';
// import history from '../store/history'
import store from '../store'
const App = () => (
    <Provider store = {store}>
        <Router history={history}>
            <Routes></Routes>
        </Router>
    </Provider>
)
export default App;