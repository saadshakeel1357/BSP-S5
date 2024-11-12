// LoginView.js
import React from 'react';
import logo from './abc-logo.avif'; // Ensure this path is correct based on your project structure
import './App.css'; // Import your main CSS file to retain the same styling

function LoginView() {
    return (
        <div className="App">
            {/* Header Section */}
            <div className="header">
                <div className='logo'>
                    <img src={logo} className='logo' alt='logo'/>
                </div>
                <div className="center-buttons">
                    {/* You can add buttons here if needed */}
                </div>
                <div className='book'>
                    <button className='book-button'>Log in</button>
                </div>
            </div>

            {/* Login Box */}
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <label>
                        Username:
                        <input type="text" name="username" required />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="password" name="password" required />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>

            {/* Footer Section */}
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

export default LoginView;