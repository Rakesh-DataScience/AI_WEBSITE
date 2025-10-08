import React from 'react';
import './App.css'; 

function App() {
  return (
    <div className="login-container">
      <h1>AI Career Coach Login</h1>
      <form className="login-form">
        <div className="input-group">
          <label htmlFor="username">Username/Email</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder="Enter your username or email" 
            required 
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Enter your password" 
            required 
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="signup-link">
        Don't have an account? <a href="#">Sign Up</a>
      </p>
    </div>
  );
}

export default App;