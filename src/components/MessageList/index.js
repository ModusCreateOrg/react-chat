import React, { Component } from 'react';
import './style.css';

export default class MessageList extends Component {
  state = {
    messages: [
      'Hello John',
      'Hello Judy',
    ]
  };

  render() {
    return (
      <ul className="message-list">
        { this.state.messages.map((msg, idx) => <li key={idx}>{msg}</li>) }
      </ul>
    );
  }
}
