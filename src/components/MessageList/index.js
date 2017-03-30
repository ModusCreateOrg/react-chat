import React, { Component } from 'react';
import './style.css';

export default class MessageList extends Component {
  render() {
    return (
      <ul className="message-list">
        <li>Hello John</li>
        <li>Hi Judy</li>
      </ul>
    );
  }
}
