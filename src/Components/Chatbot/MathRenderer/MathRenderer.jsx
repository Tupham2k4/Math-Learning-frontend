import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const MathRenderer = ({ content }) => {
  // Regex to find math formulas enclosed in $...$ (inline) or $$...$$ (block)
  // For simplicity, we can also check if the whole content starts with common LaTeX symbols
  // or use a more sophisticated parser. 
  // Here we'll handle basic LaTeX rendering if the string contains LaTeX signatures.

  const renderContent = (text) => {
    if (typeof text !== 'string') return text;

    // Simple check for block math
    if (text.startsWith('$$') && text.endsWith('$$')) {
      return <BlockMath math={text.slice(2, -2)} />;
    }
    
    // Check for inline math patterns or just render if it looks like math
    // For a robust version, we'd split text by $...$
    const parts = text.split(/(\$.*?\$)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('$') && part.endsWith('$')) {
        return <InlineMath key={index} math={part.slice(1, -1)} />;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="math-renderer">
      {renderContent(content)}
    </div>
  );
};

export default MathRenderer;
