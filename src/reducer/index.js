import { combineReducers } from "redux";
import counterReducer from './counter.js';
import ProdReducer from './product.js'
const allReducers = combineReducers({
    counter: counterReducer,
    prodState : ProdReducer
})
export default allReducers


