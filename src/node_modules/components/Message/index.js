import React from 'react';
import './style.css';

export default function Message({ user, text }) {
  return (
    <li className="message">
      <span className="message-user">{user}</span>
      <span className="message-text">{text}</span>
    </li>
  );
}
