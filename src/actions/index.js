export const increment = ()=>{
    return{
        type: 'INCREMENT'
    }
}
export const decrement = () =>{
    return{
        type: 'DECREMENT'
    }
}
export const addProd = (prod) =>{
    return{
        type: 'CREATEPROD',
        payload: prod
    }
}
export const deleteProd = () =>{
    return{
        type: 'DELETEPROD'
    }
}
  
  