const initState = {
    loggedInUser:null,
    auth:false,
    login_req:false,
    login_fail:false,
    err_msg:'',
    attempts:0,
    signup:null,
    signup_req:false,
    signup_err:''
}
const dataReducer=(state = initState,action)=>{
    let st = Object.assign({},state);
    switch(action.type)
    {
        case "LOGIN_INIT":
            st.login_req = true;
            st.loggedInUser = null;
            st.login_fail=false,
            st.auth=false;
            st.err_msg = '';
            return st;
        case "LOGIN_SUCCESS":
            st.loggedInUser = action.payload;
            st.login_req = false;
            st.auth = true;
            st.login_fail = false;
            st.err_msg = '';
            return st;
        case "LOGIN_FAILED":
            st.login_fail = true;
            st.login_req = false;
            st.attempts += 1
            st.err_msg = action.payload
            return st;
        case "SIGNUP_INIT":
            st.signup_req = true;
            st.loggedInUser = null;
            st.login_fail = false,
            st.auth=false;
            st.err_msg = '';
            st.signup_err = '';
            return st;
        case "SIGNUP_SUCCESS":
            st.login_fail = false;
            st.err_msg = '';
            st.signup_err = '';
            st.signup = action.payload;
            return st;
        case "SIGNUP_FAILED":
            st.login_fail = true;
            st.login_req = false;
            st.signup = false;
            st.signup_err = action.payload
            return st;            
        default:
            return st;
    }
}
export default dataReducer;