import React, {Component} from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

class Friends extends Component {
    render() {
        //console.log(this.props.history);
        return (
            <div>
                Friends
                <Sidebar/>
            </div>
        )
    }
}

export default Friends;