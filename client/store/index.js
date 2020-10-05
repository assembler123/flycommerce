import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import DataReducer from '../reducers/dataReducer';
import uiReducer from '../reducers/uiReducer';
import { routerReducer } from 'react-router-redux'
const saveToStorage = (state) => {
    const data = JSON.stringify(state);
    localStorage.setItem('state-flycomm', data);
}
const loadFromStorage = () => {
    try {
        let state = JSON.parse(localStorage.getItem('state-flycomm'));
        if (state == null)
            return undefined
        return state;
    } catch (e) {
        return undefined;
    }
}

const store = createStore(combineReducers({ uiReducer, DataReducer, routing: routerReducer }),loadFromStorage(), composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => {
    saveToStorage(store.getState());
})

export default store;