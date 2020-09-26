import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import DataReducer from '../reducers/dataReducer';
import uiReducer from '../reducers/uiReducer';
import { routerReducer } from 'react-router-redux'

const store = createStore(combineReducers({ uiReducer, DataReducer, routing: routerReducer }), composeWithDevTools(applyMiddleware(thunk)));
export default store;