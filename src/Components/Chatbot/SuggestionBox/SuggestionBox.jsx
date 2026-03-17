import React from 'react';
import './SuggestionBox.css';
import { Lightbulb } from 'lucide-react';

const SuggestionBox = ({ suggestions, onSelect }) => {
  return (
    <div className="suggestion-box">
      <div className="suggestion-header">
        <Lightbulb size={18} className="suggestion-icon" />
        <span>Gợi ý câu hỏi của bạn</span>
      </div>
      <div className="suggestion-list">
        {suggestions.map((suggestion, index) => (
          <button 
            key={index} 
            className="suggestion-item"
            onClick={() => onSelect(suggestion)}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestionBox;
