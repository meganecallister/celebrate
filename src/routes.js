import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Main from './components/Main/Main';
import Thanks from './components/Thanks/Thanks';

export default function() {
    return (
        <Switch>
            <Route exact path='/' component={Auth}/>
            <Route path='/main' component={Main}/>
            <Route path='/thanks' component={Thanks}/>
        </Switch>
    )
}