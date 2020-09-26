const initState = {
    loggedInUser:null,
    auth:false,
    login_req:false,
    login_fail:false,
    err_msg:''
}
const dataReducer=(state = initState,action)=>{
    let st = Object.assign({},state);
    switch(action.type)
    {
        case "LOGIN_INIT":
            st.login_req = true;
            st.loggedInUser = null;
            st.auth=false;
            st.err_msg = '';
            return st;
        case "LOGIN_SUCCESS":
            st.loggedInUser = action.payload;
            st.auth = true;
            st.login_fail = false;
            st.err_msg = '';
            return st;
        case "LOGIN_FAILED":
            st.login_fail = true;
            st.err_msg = action.payload
            return st;
        default:
            return st;
    }
}
export default dataReducer;