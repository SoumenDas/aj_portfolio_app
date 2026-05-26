import { useState } from 'react';

export default function AIAssistant({ onFilter }) {
  const [query, setQuery] = useState('');
  
  const suggestedQueries = [
    "Show me dashboards",
    "Finance projects",
    "UI Design work",
    "Data visualization"
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onFilter(query);
    } else {
      onFilter('');
    }
  };

  const handleChipClick = (text) => {
    setQuery(text);
    onFilter(text);
  };

  return (
    <div className="glass-panel ai-assistant animate-fade-in">
      <div className="ai-header">
        <svg className="ai-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a2 2 0 0 1 2 2c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2z"></path>
          <path d="M19 8h-1.5a2.5 2.5 0 0 0-2.5 2.5V12h-6v-1.5A2.5 2.5 0 0 0 6.5 8H5c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1.5a2.5 2.5 0 0 0 2.5-2.5V10h6v1.5a2.5 2.5 0 0 0 2.5 2.5H19c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2z"></path>
          <path d="M8 16v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2"></path>
          <path d="M12 22v-4"></path>
        </svg>
        <span>AI Assistant</span>
      </div>
      
      <form onSubmit={handleSearch} className="ai-input-wrapper">
        <input 
          type="text" 
          className="ai-input" 
          placeholder="Ask me anything about Abhijit's work or type a skill..." 
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (e.target.value === '') onFilter('');
          }}
        />
        <button type="submit" className="ai-btn">Explore</button>
      </form>
      
      <div className="ai-chips">
        <span style={{color: 'var(--text-secondary)', fontSize: '0.85rem', alignSelf: 'center', marginRight: '0.5rem'}}>Try asking:</span>
        {suggestedQueries.map((q, idx) => (
          <div key={idx} className="ai-chip" onClick={() => handleChipClick(q)}>
            {q}
          </div>
        ))}
        <div className="ai-chip" onClick={() => handleChipClick('')} style={{borderColor: 'var(--accent-pink)'}}>
          Reset
        </div>
      </div>
    </div>
  );
}
