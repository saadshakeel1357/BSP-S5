// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';        // Import the HomePage component
import AuthPage from './AuthPage';        // Import the HomePage component


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/authentication" element={<AuthPage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
