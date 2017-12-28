import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Live Concert Finder</h1>
        </header>
        <div className='searchControls'>
          <input type='text' placeholder='Search by artist'/>
          <input type='submit' value='Submit' />
        </div>
      </div>
    );
  }
}

export default App;
