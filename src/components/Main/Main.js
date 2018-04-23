import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getUserInfo } from '../../ducks/reducer';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Profile from '../Profile/Profile';
import Friends from '../Friends/Friends';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            birthday: '',
            color: '',
            cake: '',
            icecream: '',
            dropDown: false
        }
    }

    componentDidMount() {
        // console.log('Main: the component mounted');
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
        this.setState({icecream: e.target.value});
    }
    handleChangeCandy(e) {
        this.setState({candy: e.target.value});
    }
    handleChangeTreat(e) {
        this.setState({treat: e.target.value});
    }
   

    render() {
        const { user } = this.props
        const userDataJSX = user.display_name ?
            (
                <div className='info'>
                    <img src={user.img} alt='profile pic'/>
                    <p>{user.display_name}</p>
                </div>
            ) :
            (<p>Please log in!</p>)

        return (
            <div>
                <Nav
                    userDataJSX={userDataJSX}
                />

                <div className='main'>
                    <Switch>
                        <Route path='/main/about' component={About}/>
                        <Route path='/main/profile' component={Profile}/>
                        <Route path='/main/friends' component={Friends}/>
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