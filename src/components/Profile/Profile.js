import React, {Component} from 'react';
import './Profile.css';
import axios from 'axios';
import ProfileDisplay from './ProfileDisplay';
import ProfileUpdate from './ProfileUpdate';
import { connect } from 'react-redux';
import { updateBirthdayType, updateColorType, updateCakeType, updateIceCreamType } from '../../ducks/reducer';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            update: false
        }
        this.handleSave = this.handleSave.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handleSave() {
        console.log('trying to save')
        console.log(this.props)
        const { birthday, color, cake, icecream } = this.props;

        const body = {
                birthday,
                color,
                cake,
                icecream
            }
            console.log(body);
        axios.put('/api/updateInfo', body)
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

    openModal = () => {
        document.getElementById('myModal').style.display = 'block';
    }

    closeModal = () => {
        console.log('clicked submit');
        this.handleSave();
        document.getElementById('myModal').style.display = 'none';

    }

    render() {
        const { updateBirthdayType, updateColorType, updateCakeType, updateIceCreamType } = this.props;
        const updateProfile = this.state.update ?
            (
                <div><ProfileUpdate
                    handleSave={this.handleSave}
                    closeModal={this.closeModal}
                /></div>
            ) :
            null

        return (
            <div className='profile'>

                <div className='body'>

                    <h2>Profile</h2>

                    <ProfileDisplay
                        handleSave={this.handleSave}/>
                    
                    
                    {/* <button onClick={this.handleClick}>Update</button> */}

                    <button onClick={this.openModal}>Update Info</button>
                    <div id="myModal" style={{display: 'none'}}>
                        <div className='modal-content'>
                            <ProfileUpdate/>
                            <button onClick={this.closeModal}>Submit</button>
                        </div>
                    </div>
                    <div className='popup'>
                        {/* {updateProfile} */}
                    </div>

                </div>

            </div>
        ) 
    }
}

function mapStateToProps( state ) {
    const { birthday, color, cake, icecream } = state;

    return {
        birthday,
        color,
        cake,
        icecream
    }
}
export default connect( mapStateToProps, { updateBirthdayType, updateColorType, updateCakeType, updateIceCreamType })(Profile);