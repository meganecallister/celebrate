import React from 'react';
import './Auth.css';
import cupcake from '../../cupcake-logo.png';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import muiThemeable from 'material-ui/styles/muiThemeable';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

export default function Auth() {
    return (
        <div className='auth'>
            <AppBar
                // title={<span>Celebrate</span>}
                title="Celebrate"
                iconElementRight={<a href={process.env.REACT_APP_LOGIN}><FlatButton label='Login'/></a>}
                />
            
                <img className='logo' src={cupcake} alt='delicious chocolate cupcake'/>
                <p className='catch-phrase'>Join the celebration!</p>
        </div>
    ) 
}