import React, { useState } from 'react';
import axios from 'axios';

function Auth({ onLogin }) {
    const [isRegister, setIsRegister] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const endpoint = isRegister ? '/register' : '/login';
        try {
            // Make the API request
            const response = await axios.post(`http://localhost:5010${endpoint}`, { username, password });
            
            // Check if response.data exists before accessing message
            if (response && response.data && response.data.message) {
                setMessage(response.data.message);
            } else {
                setMessage('Unexpected response format');
            }
            
            // If logging in, call onLogin
            if (!isRegister) {
                onLogin(username);
            }
        } catch (error) {
            // Check if error.response exists and handle it
            if (error.response && error.response.data && error.response.data.message) {
                setMessage(error.response.data.message); // Display error message from server
            } else {
                setMessage('An error occurred. Please try again.'); // General error message
            }
        }
    };

    return (
        <div>
            <h2>{isRegister ? 'Register' : 'Login'}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <br />
                <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
            </form>
            <button onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? 'Switch to Login' : 'Switch to Register'}
            </button>
            <p>{message}</p>
        </div>
    );
}

export default Auth;