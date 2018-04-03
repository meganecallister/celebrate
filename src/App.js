import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Profile from './components/Profile/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Home/>
        <Admin/>
        <Profile/>
      </div>
    );
  }
}

export default App;
