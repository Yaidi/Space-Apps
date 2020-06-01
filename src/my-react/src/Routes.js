import React from 'react';
import {Switch, Route} from 'react-router-dom';
import WindowChoose from './Components/WindowChoose';
import PrivateRoute from './PrivateRoute';


const Routes = () => {
    return(
       
        <Switch>
         <PrivateRoute path="/Home">
             <div>Hola</div>
         </PrivateRoute>
            <Route exact path= '/'>
            <WindowChoose windowchoose='Register' hash='/Login'/>
            </Route>
            <Route  path= '/Login'>
            <WindowChoose windowchoose='Login' hash='/'/>
            </Route>
    
        </Switch>
     
    )
}
export default Routes