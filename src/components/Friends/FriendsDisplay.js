import React, {Component} from 'react';
import './Friends.css';
import axios from 'axios';
import FontIcon from 'material-ui/FontIcon';




export default class FriendsDisplay extends Component {
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
                    <p>{e.display_name}</p>

                    {/* <List>
                        <ListItem
                        disabled={true}
                        leftAvatar={
                        <Avatar src="images/uxceo-128.jpg" />}>
                            Image Avatar
                        </ListItem>
                        } */}

                    <img src={e.img}/>
                    {/* <p>{`Birthday: ${e.birthday}`}</p> */}
                    {/* <p>{`Cake: ${e.cake}`}</p>
                    <p>{`Ice cream: ${e.iceCream}`}</p> */}
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