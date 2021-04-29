import React from 'react'
import {FaCartPlus} from "react-icons/fa";
import {useSelector} from 'react-redux'
export default function Header() {
    const counter = useSelector(state => state.counter)
    const products = useSelector(state => state.prodState)
    console.log(products);
    console.log(counter);
   
    return (
        <div>
         <ul>
            {
                products && products.map(prd =>{
                    <li key={prd.title}>{prd.title}</li>
                })
            }
         </ul>
       
            Header {counter}
            <FaCartPlus></FaCartPlus>
        </div>
    )
}
