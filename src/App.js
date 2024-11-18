import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import AuthPage from './AuthPage';
import UserView from './UserView';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    console.log(`Logged in as ${username}`);
    setLoggedInUser(username);
    window.location.href = "/userview";
  };

  const handleLogout = () => {
    console.log('User logged out');
    setLoggedInUser(null);
    window.location.href = "/";
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/authentication" element={<AuthPage onLogin={handleLogin} />} />
          <Route path="/userview" element={<UserView handleLogout={handleLogout} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
