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
    constructor() {
        super();
        this.state = {
            //profile favorites
            birthday: '',
            color: '',
            cake: '',
            iceCream: '',
            //friends list
            //groups list
        }
        //binding stuff?
    }
    componentDidMount() {
        console.log('Main: the component mounted');
        this.props.getUserInfo();
    }

    //Profile page
    handleChangeBirthday(e) {
        this.setState({birthday: e.target.value});
    }
    handleChangeColor(e) {
        this.setState({color: e.target.value});
    }
    handleChangeCake(e) {
        this.setState({cake: e.target.value});
    }
    handleChangeIceCream(e) {
        this.setState({iceCream: e.target.value});
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
            (<p>Please log in!</p>)

        return (
            <div>
                <Nav/>
                <Sidebar userDataJSX={userDataJSX}/>
                <div className='main'>
                    <Switch>
                        <Route path='/main/home' component={Home}/>
                        <Route path='/main/profile' component={Profile}/>
                        <Route path='/main/friends' component={Friends}/>
                        <Route path='/main/groups' component={Groups}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        state,
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(Main);