import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input) return;
    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');

    const res = await axios.post('http://localhost:5000/chat', { message: input });
    setMessages(prev => [...prev, userMessage, { sender: 'bot', text: res.data.reply }]);
  };

  return (
    <div className="chat-container">
      <h2>🤖 AI Career Coach</h2>
      <div className="messages-box">
        {messages.map((m, i) => (
          <div key={i} className={`message ${m.sender}`}>
            <p>{m.text}</p>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
