import React, {useState } from 'react';
import axios from 'axios';
import logo from './abc-logo.avif'; // Update to point to your logo file
import './AuthPage.css'


function AuthPage({ onLogin }) {
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
            console.log("Response received from server:", response);

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
            console.error("Error during login/register:", error);
            // Check if error.response exists and handle it
            if (error.response && error.response.data && error.response.data.message) {
                setMessage(error.response.data.message); // Display error message from server
            } else {
                setMessage('An error occurred. Please try again.'); // General error message
            }
        }
    };

    return (
        <div className='AuthPage'>
            <div className="header">
                <div className='logo' style={{ cursor: 'pointer' }}>
                    <img src={logo} onClick={() => window.location.href = "/"} className='logo' alt='logo'/>
                </div>
                        <div className="center-buttons">
                            <button onClick={() => window.location.href = "/"}>Why 360° Tours?</button>
                            <button onClick={() => window.location.href = "/"}>Our Services</button>
                            <button onClick={() => window.location.href = "/"}>Contact Us</button>
                        </div>
                <div className='book'>
                    <button className='book-button' onClick={() => window.location.href = "/authentication"}>Log in</button>
                </div>
            </div>
            <div className='login-box'>
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
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>About Us</h4>
                        <p>We specialize in creating immersive 360° virtual tours for real estate, helping agents showcase properties like never before.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <p>Email: info@abc-creative.com</p>
                        <p>Phone: +352 661 258 981</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© ABC Creative Consultancy | All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default AuthPage;