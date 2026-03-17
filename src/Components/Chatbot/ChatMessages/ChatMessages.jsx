import React from 'react';
import './ChatMessages.css';
import { Bot, User } from 'lucide-react';
import MathRenderer from '../MathRenderer/MathRenderer';

const ChatMessages = ({ messages }) => {
  return (
    <div className="chat-messages">
      {messages.map((msg, index) => (
        <div key={index} className={`message-wrapper ${msg.role === 'user' ? 'user' : 'ai'}`}>
          <div className="message-avatar">
            {msg.role === 'user' ? (
              <div className="avatar user-avatar"><User size={20} /></div>
            ) : (
              <div className="avatar ai-avatar"><Bot size={20} /></div>
            )}
          </div>
          <div className="message-bubble">
            <MathRenderer content={msg.content} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
