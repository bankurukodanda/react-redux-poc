
import {useState, useEffect} from 'react'
import './Details.css'
export default function Details(props) {
    const [product, setProduct] =  useState({})
    const [id,setId] = useState();
    useEffect(() => {
        setId(props.match.params.id);
        fetch('http://localhost:7000/product/'+props.match.params.id).then(
            res =>res.json()
        ).then(response => {
            setProduct(response[0]);
            console.log(product)
        })
    },[id])
    
    // setProductId(props.match.params.id);
    return (
        <div className='product-details'>
            <div> Title: {product.title}</div>
            <div> Desc:{product.description}</div>
            <div> Height: {product.height}</div>
            <div> Width: {product.width}</div>
        </div>
    )
}
