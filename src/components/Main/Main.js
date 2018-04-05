import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getUserInfo } from '../../ducks/reducer';
import { connect } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
// import Admin from '../Admin/Admin';
import Profile from '../Profile/Profile';
import Friends from '../Friends/Friends';
import Groups from '../Groups/Groups';

class Main extends Component {
    componentDidMount() {
        console.log('Main: the component mounted');
        this.props.getUserInfo();
    }

    render() {
        const { user } = this.props
        const userDataJSX = user.display_name ?
            (
                <div>
                    <img src={user.img} alt='profile pic'/>
                    <p>{user.display_name}</p>
                </div>
            ) :
            (<p>Your user.display_name is null! Sad face.</p>)

        return (
            <div className='main'>
                <Nav/>
                <Sidebar
                    userDataJSX = {this.props.userDataJSX}
                />
                <h2>Main</h2>
                <Switch>
                    <Route path='/main/home' component={Home}/>
                    <Route path='/main/profile' component={Profile}/>
                    <Route path='/main/friends' component={Friends}/>
                    <Route path='/main/groups' component={Groups}/>
                </Switch>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(Main);