import React, { useState, useRef, useEffect } from 'react';
import './ChatbotLayout.css';
import ChatHistory from '../ChatHistory/ChatHistory';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import ChatMessages from '../ChatMessages/ChatMessages';
import ChatInput from '../ChatInput/ChatInput';
import SuggestionBox from '../SuggestionBox/SuggestionBox';

const ChatbotLayout = () => {
  const [messages, setMessages] = useState([]);
  const [history, setHistory] = useState([
    { id: 1, title: 'Giải phương trình bậc 2', time: '10 phút trước' },
    { id: 2, title: 'Hỏi về đạo hàm', time: '1 giờ trước' }
  ]);
  const [activeChatId, setActiveChatId] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text) => {
    const newUserMsg = { role: 'user', content: text };
    setMessages(prev => [...prev, newUserMsg]);
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = { 
        role: 'ai', 
        content: `Tôi đã nhận được câu hỏi của bạn: "${text}". Để tôi giúp bạn giải bài toán này... \n\nVí dụ về công thức: $\\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$` 
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleNewChat = () => {
    setMessages([]);
    setActiveChatId(null);
  };

  const handleSelectHistory = (id) => {
    setActiveChatId(id);
    // In a real app, fetch messages for this chat
    setMessages([
      { role: 'user', content: 'Chào AI, hãy giúp tôi giải toán' },
      { role: 'ai', content: 'Chào bạn! Tôi là trợ lý AI toán học. Bạn cần giúp gì nào?' }
    ]);
  };

  return (
    <div className="chatbot-container">
      <aside className="chatbot-sidebar">
        <ChatHistory 
          history={history} 
          activeId={activeChatId}
          onSelectChat={handleSelectHistory}
          onNewChat={handleNewChat}
        />
      </aside>
      
      <main className="chatbot-main">
        <div className="chat-content-area">
          {messages.length === 0 ? (
            <WelcomeScreen onSelectSuggestion={handleSend} />
          ) : (
            <>
              <ChatMessages messages={messages} />
              <div ref={messagesEndRef} />
              <SuggestionBox 
                suggestions={["Giải tiếp bài này", "Giải thích chi tiết hơn", "Ví dụ tương tự"]}
                onSelect={handleSend}
              />
            </>
          )}
        </div>
        
        <div className="chat-input-area">
          <ChatInput onSend={handleSend} />
        </div>
      </main>
    </div>
  );
};

export default ChatbotLayout;
