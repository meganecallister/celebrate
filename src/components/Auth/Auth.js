import React, {Component} from 'react';
import './Auth.css';
import cupcake from '../../cupcake.jpg';

class Auth extends Component {
    render() {
        {this.props.history}
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
                        <button className='auth-button'>Log in</button>
                        <button className='auth-button'>Sign up</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auth;