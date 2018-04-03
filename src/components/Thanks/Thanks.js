import React, {Component} from 'react';
import './Thanks.css';
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
                    <p className='catch-phrase'>Thanks for visiting Celebrate!</p>
                </div>
            </div>
        )
    }
}

export default Auth;