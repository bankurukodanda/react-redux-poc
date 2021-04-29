import React from 'react'
import './ProdTile.css'
import { useDispatch} from 'react-redux';
import {increment,addProd} from '../../actions/index.js'
import { Link } from 'react-router-dom';

export default function ProdTile(prop) {
    let porduct = prop.prod;
    // const counter = useSelector(state => state.counter)
const dispatch = useDispatch();
    return (
        <div className="product-tile">
            <div className="title">
              <Link  to={'details/'+porduct.id}>{porduct.title}</Link>
            </div>
            <div className="actions">
                <button onClick={()=>dispatch(addProd(porduct))}>Add</button>
                <button onClick={()=>dispatch(increment())}>Add Count</button>
            </div>
        </div>
    )
}
