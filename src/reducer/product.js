// const prodStructure ={
//     products:[],
//     count:0
// }
const ProdReducer = (state=[], action) =>{
    switch(action.type){
        case 'CREATEPROD':
            if(action && action.payload)
           state.push(action.payload);
            //return  [action.payload]
            return state;
        case 'DELETEPROD':
            return state;
        default:
            return state;
    }
}
export default ProdReducer