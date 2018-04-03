import React, {Component} from 'react';
import './Auth.css';

class Auth extends Component {
    render() {
        return (
            <div class='auth'>
                <div class='left-side'>
                    <h1>Celebrate</h1>
                    <div class='logo'></div>
                </div>
                <div class='right-side'>
                    <p class='catch-phrase'>Celebrate their birthday they way they would want.</p>
                    <div class='login-signup'>
                        <button>Log in</button>
                        <button>Sign up</button>
                    </div>
                    

                </div>
            </div>
        )
    }
}

export default Auth;