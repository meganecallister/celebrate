import React, {Component} from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Nav from '../../components/Nav/Nav';
import './Groups.css';

class Groups extends Component {
    render() {
        return (
            <div className='groups'>
                <Nav/>
                <Sidebar/>
            </div>
        )
    }
}

export default Groups;