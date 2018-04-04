import React, {Component} from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Nav from '../../components/Nav/Nav';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Nav/>
                <main>
                    <Sidebar/>
                    <div className='white-space'>
                        <p>Here is some information...</p>
                    </div>
                </main>
                
            </div>
        )
    }
}

export default Home;