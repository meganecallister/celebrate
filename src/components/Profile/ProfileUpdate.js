import React, {Component} from 'react';
import './Profile.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateBirthdayType, updateColorType, updateCakeType, updateIceCreamType } from '../../ducks/reducer';

class ProfileUpdate extends Component {
    constructor() {
        super()

    }

    render() {
        return (
            <div className='profile-update'>
              
                <p className='title'>Update Info</p>
            <div className='profile-inputs'>
                        <input
                            type='text'
                            placeholder='Birth Month & Day'
                            onChange={ e => this.props.updateBirthdayType( e.target.value) }
                        />
                        <input
                            type='text'
                            placeholder='Color'
                            onChange={ e => this.props.updateColorType( e.target.value) }
                        />
                        <input
                            type='text'
                            placeholder='Cake'
                            onChange={ e => this.props.updateCakeType( e.target.value) }
                        />
                        <input
                            type='text'
                            placeholder='Ice Cream'
                            onChange={ e => this.props.updateIceCreamType( e.target.value) }
                        />
                        </div>
                <div className='close-profile-modal'>
                    <button onClick={this.props.closeModal}>Cancel</button>
                    <button onClick={this.props.handleSave}>Submit</button>
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
export default connect( mapStateToProps, { updateBirthdayType, updateColorType, updateCakeType, updateIceCreamType })(ProfileUpdate);
// export default ProfileUpdate;