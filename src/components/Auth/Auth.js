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
                        <Link to='/home'><button className='auth-button'>Log in</button></Link>
                        <Link to='/profile'><button className='auth-button'>Sign up</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auth;