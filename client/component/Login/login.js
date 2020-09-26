import axios from 'axios';
import { root_api } from '../../constants'
const login_request_init = () => {
    return {
        type: 'LOGIN_INIT'
    }
}
const login_request_failed = (err) => {
    return {
        type: 'LOGIN_FAILED',
        payload: err
    }
}

const login_request_success = (data) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload: data
    }
}
const login_request = (params) => {
    return (dispatch) => {
        dispatch(login_request_init())
        axios.post(root_api + '/login', params).then(res => {
            return dispatch(login_request_success(res.data))
        }).catch(err => {
            return dispatch(login_request_failed(err.message.split(' ').pop()))
        })
    }
}
export default login_request;