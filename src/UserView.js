import React from 'react';
import logo from './abc-logo.avif';
import './App.css';
import './AuthPage.css';

function UserView({ handleLogout }) {
    const onLogoutClick = () => {
        handleLogout(); // Calls the passed function to clear logged-in state
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
                    {/* Call onLogoutClick on click */}
                    <button className='book-button' onClick={onLogoutClick}>Logout</button>
                </div>
            </div>

            <div className='login-box'>
                <h1>This is the user's view page when the user logs in</h1>
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

export default UserView;
