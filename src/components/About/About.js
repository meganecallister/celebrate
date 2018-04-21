import React, {Component} from 'react';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className='about'>
                
                <div className='body'>
                <h2>About</h2>
                <div className='welcome'>
                <p>Welcome to Celebrate, a simple website to help you keep track of your friends’ birthday celebration preferences.</p>
                <br/>
                <p>My idea of a good birthday celebration is very different from my loved ones’ ideas, so I wanted to create a site to help keep track of their preferences. Everyone gets one special day a year and I think we all deserve to be celebrated the way we like.</p>
                <br/>
                <p>Some things to keep in mind:</p>
                    <ul>
                        <li>I suggest not adding your real birthday, just because this is the internet and it can be dangerous.</li>

                        <li>This is my first personal project and it is meant to be an exercise, not the next Facebook.</li>

                        <li>I acknowledge that Celebrate is small, but I’m grateful for what it has taught me.</li>

                    </ul>

                <p>Thank you for your willingness to participate by logging in!</p>
                <br/>
                <p>Sincerely,</p>
                <br/>
                <p>Megan</p>
                </div>
                </div>
            </div>
        )
    }
}

export default About;