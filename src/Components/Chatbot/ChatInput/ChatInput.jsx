import React, { useState, useRef, useEffect } from 'react';
import './ChatInput.css';
import { Send, Camera, Sigma, X } from 'lucide-react';
import 'mathlive';

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState('');
  const [isMathMode, setIsMathMode] = useState(false);
  const textareaRef = useRef(null);
  const mathFieldRef = useRef(null);

  useEffect(() => {
    if (isMathMode && mathFieldRef.current) {
      mathFieldRef.current.focus();
      
      const handleChange = (e) => {
        setInput(e.target.value);
      };

      const currentMf = mathFieldRef.current;
      currentMf.addEventListener('input', handleChange);
      return () => {
        currentMf.removeEventListener('input', handleChange);
      };
    }
  }, [isMathMode]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (!isMathMode) {
      e.target.style.height = 'auto';
      e.target.style.height = `${e.target.scrollHeight}px`;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    if (input.trim()) {
      const content = isMathMode ? `$$${input}$$` : input;
      onSend(content);
      setInput('');
      setIsMathMode(false);
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const toggleMathMode = () => {
    setIsMathMode(!isMathMode);
    setInput('');
  };

  return (
    <div className="chat-input-container">
      {isMathMode && (
        <div className="math-mode-badge">
          <span>Đang ở chế độ nhập công thức</span>
          <button onClick={toggleMathMode} className="close-math-btn"><X size={14} /></button>
        </div>
      )}
      <div className={`chat-input-wrapper ${isMathMode ? 'math-mode' : ''}`}>
        {!isMathMode && (
          <button 
            className="input-action-btn fx-btn" 
            onClick={toggleMathMode}
            title="Nhập công thức toán"
          >
            <Sigma size={20} />
          </button>
        )}
        
        {isMathMode ? (
          <math-field
            ref={mathFieldRef}
            class="chat-math-field"
            virtual-keyboard-mode="onfocus"
          >
            {input}
          </math-field>
        ) : (
          <textarea
            ref={textareaRef}
            className="chat-textarea"
            rows="1"
            placeholder="Nhập câu hỏi toán của bạn..."
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        )}
        
        <div className="chat-input-btns">
          <button className="input-action-btn upload-btn" title="Upload ảnh bài toán">
            <Camera size={20} />
          </button>
          <button 
            className={`send-btn ${input.trim() ? 'active' : ''}`} 
            onClick={handleSend}
            disabled={!input.trim()}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
