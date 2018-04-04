import React, {Component} from 'react';
import './Thanks.css';
import { Link } from 'react-router-dom';
import cupcake from '../../cupcake.jpg';

class Auth extends Component {
    render() {
        return (
            <div className='thanks'>
                <div className='left-side'>
                    <Link to='/'><h1 style={{textDecoration: 'none'}}>Celebrate</h1></Link>
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