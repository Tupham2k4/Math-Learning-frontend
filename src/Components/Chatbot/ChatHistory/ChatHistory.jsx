import React from 'react';
import './ChatHistory.css';
import { MessageSquare, Clock } from 'lucide-react';

const ChatHistory = ({ history, activeId, onSelectChat, onNewChat }) => {
  return (
    <div className="chat-history">
      <button className="new-chat-btn" onClick={onNewChat}>
        <span className="plus-icon">+</span> Cuộc trò chuyện mới
      </button>
      
      <div className="history-section">
        <h3 className="history-title">Lịch sử trò chuyện</h3>
        
        <div className="history-list">
          {!history || history.length === 0 ? (
            <div className="empty-history">Chưa có lịch sử</div>
          ) : (
            history.map((item) => (
              <div 
                key={item.id} 
                className={`history-item ${activeId === item.id ? 'active' : ''}`}
                onClick={() => onSelectChat(item.id)}
              >
                <MessageSquare size={16} className="history-item-icon" />
                <div className="history-item-content">
                  <div className="history-item-title">{item.title}</div>
                  <div className="history-item-time">
                    <Clock size={10} /> {item.time}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatHistory;
