import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
// import Sidebar from './components/Sidebar/Sidebar';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Sidebar/> */}
        {routes()}
      </div>
    );
  }
}

export default App;
