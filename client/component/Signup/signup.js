import axios from 'axios';
import { root_api } from '../../constants'
const signup_request_init = () => {
    return {
        type: 'SIGNUP_INIT'
    }
}
const signup_request_failed = (err) => {
    return {
        type: 'SIGNUP_FAILED',
        payload: err
    }
}

const signup_request_success = (data) => {
    return {
        type: 'SIGNUP_SUCCESS',
        payload: data
    }
}
const signup_request = (params) => {
    return (dispatch) => {
        dispatch(signup_request_init())
        axios.post(root_api + '/signup', params).then(res => {
            return dispatch(signup_request_success(res.data))
        }).catch(err => {
            return dispatch(signup_request_failed(err.message.split(' ').pop()))
        })
    }
}
export default signup_request;