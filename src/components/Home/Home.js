import React, {Component} from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Nav from '../../components/Nav/Nav';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Nav/>
                <Sidebar/>
            </div>
        )
    }
}

export default Home;