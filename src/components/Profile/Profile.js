import React, {Component} from 'react';
import './Profile.css';
import axios from 'axios';
import ProfileDisplay from './ProfileDisplay';
import ProfileUpdate from './ProfileUpdate';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            update: false
        }
        this.handleSave = this.handleSave.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleSave() {
        const { birthday, color, cake, iceCream } = this.props;

        const body = {
                birthday,
                color,
                cake,
                iceCream
            }
            console.log(body);
        axios.post('/api/updateInfo', body)
        .then(console.log('I am trying to post...'))
        .catch(err => {
            console.log(err);
        })
    }

    handleClick() {
        this.setState({
            update: true
        })
    }

    render() {
        const { updateBirthdayType, updateColorType, updateCakeType, updateIceCreamType } = this.props;
        const updateProfile = this.state.update ?
            (
                <div><ProfileUpdate/></div>
            ) :
            null

        return (
            <div className='profile'>
                <div className='body'>
                    <h2>Profile</h2>
                    <ProfileDisplay/>
                    <button onClick={this.handleClick}>Update</button>
                    <div className='popup'>
                        {updateProfile}
                    </div>
                </div>
            </div>
        ) 
    }
}

export default Profile;