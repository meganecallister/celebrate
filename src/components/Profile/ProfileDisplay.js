import React, {Component} from 'react';
import './Profile.css';
import axios from 'axios';
// import { connect } from 'react-redux';

export default class ProfileDisplay extends Component {
    constructor() {
        super()
        this.state = {
            profileInfo: []
        };
    }

    componentDidMount() {
        console.log('ProfileDisplay: the component mounted');
        axios.get('/displayProfileInfo').then(res => {
            this.setState({
                profileInfo: res.data
            })
        })
        .catch(err => {console.log(err);})
    }

    
    render() {
        let preferences = this.state.profileInfo.map( (e, i) => {
            return (
                <div key={i}>
                    {console.log('preferences', e)}
                    <h4>Birthday Preferences</h4>
                    <p>{`Birthday: ${e.birthday}`}</p>
                    <p>{`Color: ${e.color}`}</p>
                    <p>{`Cake: ${e.cake}`}</p>
                    <p>{`Ice cream: ${e.iceCream}`}</p>
                </div>
            )
        })

        return (
            <div>
                { preferences }
            </div>
        )
    }
}