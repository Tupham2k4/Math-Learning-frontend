import React from 'react';
import './WelcomeScreen.css';
import { Bot } from 'lucide-react';

const WelcomeScreen = ({ onSelectSuggestion }) => {
  const suggestions = [
    "Giải phương trình x² + 3x + 2 = 0",
    "Tính đạo hàm của sin(x)",
    "Vẽ đồ thị y = x²",
    "Chứng minh tam giác cân"
  ];

  return (
    <div className="welcome-screen">
      <div className="welcome-icon">
        <Bot size={64} color="#3A9D5D" strokeWidth={1.5} />
      </div>
      <h1 className="welcome-title">Chào mừng đến với Chatbot AI Toán học</h1>
      <p className="welcome-desc">
        Hãy đặt bất kỳ câu hỏi nào về toán học, tôi sẽ giúp bạn giải và hướng dẫn chi tiết từng bước.
      </p>
      
      <div className="welcome-suggestions">
        {suggestions.map((text, index) => (
          <button 
            key={index} 
            className="welcome-suggestion-btn"
            onClick={() => onSelectSuggestion(text)}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WelcomeScreen;
