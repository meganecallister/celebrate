import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Profile from './components/Profile/Profile';
import Friends from './components/Friends/Friends';
import Groups from './components/Groups/Groups';
import Thanks from './components/Thanks/Thanks';

export default function() {
    return (
        <Switch>
            <Route exact path='/' component={Auth}/>
            <Route path='/home' component={Home}/>
            <Route path='/admin' component={Admin}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/friends' component={Friends}/>
            <Route path='/groups' component={Groups}/>
            <Route path='/thanks' component={Thanks}/>
        </Switch>
    )
}