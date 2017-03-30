import React, { Component } from 'react';
import logo from './logo.svg';
import MessageList from './components/MessageList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Chat</h2>
        </div>
        <main>
          <MessageList />
          <div>
            <input name="user" />
            <input name="message" />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
