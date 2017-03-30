import React, { Component } from 'react';
import './style.css';

export default class MessageList extends Component {
  state = {
    messages: {
      1: {
        user: 'Judy',
        text: 'Hello John',
      },
      2: {
        user: 'John',
        text: 'Yo Judy',
      }
    },
  };

  render() {
    const { messages } = this.state;
    const ids = Object.keys(messages);

    return (
      <ul className="message-list">
        { 
          ids.map(id => (
            <li key={id}>
              <span>{messages[id].user}:</span>
              <span>{messages[id].text}</span>
            </li>
          ))
        }
      </ul>
    );
  }
}
