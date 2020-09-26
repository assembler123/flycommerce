const initState = {

}
const uiReducer=(state = initState,action)=>{
    let st = Object.assign({},state);
    switch(action.type)
    {
        default:
            return st;
    }
}
export default uiReducer;