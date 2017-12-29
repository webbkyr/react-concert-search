import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { searchArtist } from './actions/search'

class App extends Component {

  userSearchTerm(e) {
    e.preventDefault()
    this.props.dispatch(searchArtist(this.input.value))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Live Concert Finder</h1>
        </header>
        <div className='searchControls'>
        <form onSubmit={e => this.userSearchTerm(e)}>
          <input type='text' placeholder='Search by artist'
          ref={input => this.input = input} />
          <button>Search</button>
        </form>
        </div>
      </div>
    );
  }
}

// 
const mapStateToProps = state => ({
  events: state.events,
  loading: state.loading,
  error: state.error
})

export default connect(mapStateToProps)(App)