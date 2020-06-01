import React from 'react';
import {Switch, Route} from 'react-router-dom';
import WindowChoose from './Components/WindowChoose';
import PrivateRoute from './PrivateRoute';
import Chat from './View/Chat';


const Routes = () => {
    return(
       
        <Switch>
            <Route exact path= '/'>
            <WindowChoose windowchoose='Register' hash='/Login'/>
            </Route>
            <Route  path= '/Login'>
            <WindowChoose windowchoose='Login' hash='/'/>
            </Route>
            <PrivateRoute path='/Home'>
                <Chat/>
            </PrivateRoute>
    
        </Switch>
     
    )
}
export default Routes