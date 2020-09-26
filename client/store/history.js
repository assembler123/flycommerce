import store from './store';
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
export default syncHistoryWithStore(browserHistory, store)