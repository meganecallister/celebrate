import React, {Component} from 'react';
import './Friends.css';
import axios from 'axios';

class FriendsDisplay extends Component {
    constructor() {
        super()
        this.state = {
            friendsList: []
        };
    }

    componentDidMount() {
        console.log('friendsList: the component mounted');
        axios.get('/displayFriendsList').then(res => {
            this.setState({
                friendsList: res.data
            })
        })
        .catch(err => {console.log(err);})
    }

    render() {
        console.log('render of friendsdisplay');
        let friends = this.state.friendsList.map( (e, i) => {
            return (
                <div key={i}>
                    {console.log('friends', e)}
                    <div onClick={this.handleView}>
                        <p>{e.display_name}</p>
                        <img src={e.img}/>
                    </div>
                    <button>Delete</button>
                </div>
            )
        })

        return (
            <div>
                { friends }
            </div>
        )
    }
}

export default FriendsDisplay;


