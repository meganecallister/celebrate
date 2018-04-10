import React, {Component} from 'react';
import './Friends.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateFriendsList } from '../../ducks/reducer';

class FriendsChange extends Component {
    constructor() {
        super()
    }
    
    render() {
        return (
            <div className='profile-update'>
                {/* <div className='popup'>

                    <p>When is your birthday?</p>
                    <input type='date' onChange={ e => updateBirthdayType( e.target.value) }/>

                    <p>color? <input type='type' onChange={ e => updateColorType( e.target.value) }/></p>

                    <p>cake? <input type='text' onChange={ e => updateCakeType( e.target.value) }/></p>

                    <p>ice cream? <input type='text' onChange={ e => updateIceCreamType( e.target.value) }/></p>
                
                    <div>
                        { this.props.birthday && this.props.color &&this.props.cake && this.props.iceCream
                        ?
                        <button onClick={this.handleSave}>Save</button>
                        : null }
                    </div>
                </div> */}
            </div>
        )
    }
}

function mapStateToProps( state ) {
    const { friends } = state;

    return {
        friends
    }
}
export default connect( mapStateToProps, { updateFriendsList })(FriendsChange);