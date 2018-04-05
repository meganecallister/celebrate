import React, {Component} from 'react';
import './Profile.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateBirthdayType, updateColorType, updateCakeType, updateIceCreamType } from '../../ducks/reducer';

class Profile extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         party: {}
    //     }
    // }
    handleSave() {
        const { birthday, color, cake, iceCream } = this.props;
        // this.setState({
            
        const party = {
                birthday,
                color,
                cake,
                iceCream
            }
        // })
        axios.post('/api/updateInfo', party)
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        const { updateBirthdayType, updateColorType, updateCakeType, updateIceCreamType } = this.props;
        return (
            <div className='profile'>
                <h2>Profile</h2>

                <p>When is your birthday?</p>
                <input onChange={ e => updateBirthdayType( e.target.value) }/>

                <p>What is your favorite...</p>
                <ul>
                    <li>color?</li>
                    <input onChange={ e => updateColorType( e.target.value) }/>

                    <li>cake?</li>
                    <input onChange={ e => updateCakeType( e.target.value) }/>

                    <li>ice cream?</li>
                    <input onChange={ e => updateIceCreamType( e.target.value) }/>
                </ul>
                <button onClick={this.handleSave()}>Save</button>
            </div>
        )
    }
}

function mapStateToProps( state ) {
    const { birthday, color, cake, iceCream } = state;

    return {
        birthday,
        color,
        cake,
        iceCream
    }
}
export default connect( mapStateToProps, { updateBirthdayType, updateColorType, updateCakeType, updateIceCreamType })(Profile);