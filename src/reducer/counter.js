const counterReducer = (state=0, action) =>{
    switch(action.type){
        case 'INCREMENT':
            return ++state;
        case 'DECREMENT':
            if(state > 0)
                return --state;
            else
                return state
        default:
            return state;
    }
}
export default counterReducer;