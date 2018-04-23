import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getUserInfo } from '../../ducks/reducer';
import { connect } from 'react-redux';
// import  'font-awesome/css/font-awesome.min.css';
// import Sidebar from '../Sidebar/Sidebar';
import Nav from '../Nav/Nav';
import About from '../About/About';
// import Admin from '../Admin/Admin';
import Profile from '../Profile/Profile';
import Friends from '../Friends/Friends';
import Groups from '../Groups/Groups';
// import AppBar from 'material-ui/AppBar';
// import axios from 'axios';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            birthday: '',
            color: '',
            cake: '',
            icecream: '',
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
   
    // handleDropDown() {
    //     document.getElementById("dropLinks").classlist.toggle("show");
    //     console.log('clicked on dropdown!')
    // }
//I totally copied the following code. :S -*.*-
    handleDropUp() {
        document.getElementById("dropLinks").classlist.toggle("none");
        // window.onclick = function(event) {
        //     if (!event.target.matches('.dropbtn')) {
      
        //     var dropdowns = document.getElementsByClassName("dropdown-content");
        //     var i;
        //     for (i = 0; i < dropdowns.length; i++) {
        //         var openDropdown = dropdowns[i];
        //         if (openDropdown.classList.contains('show')) {
        //         openDropdown.classList.remove('show');
        //         }
        //     }
        //     }
        // }
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
                    // handleDropDown={this.handleDropDown}
                    // handleDropUp={this.handleDropUp}
                />

                {/* <Sidebar userDataJSX={userDataJSX}/> */}
                <div className='main'>
                    <Switch>
                        <Route path='/main/about' component={About}/>
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