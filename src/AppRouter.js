import { Switch, Route } from 'react-router-dom'
import Details from './components/details/Details.js';
import List from './components/list/ProdList.js';
export default function AppRouter(){
    return(
        <Switch>
            <Route path='/details/:id' component={Details}></Route>
            <Route path='/' component={List}></Route>
        </Switch>
    )
}
