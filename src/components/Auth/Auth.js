import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import cupcake from '../../cupcake.jpg';

class Auth extends Component {
    render() {
        return (
            <div className='auth'>
                <div className='left-side'>
                    <h1>Celebrate</h1>
                    <div className='logo'>
                        <img src={cupcake} alt='delicious chocolate cupcake'/>
                    </div>
                </div>
                <div className='right-side'>
                    <p className='catch-phrase'>Celebrating the lives of others.</p>
                    <div className='login-signup'>
                        <a href={process.env.REACT_APP_LOGIN}>
                            <button className='auth-button'>Join the celebration!</button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auth;