import React, { useState, useEffect } from 'react';
import logo from './abc-logo.avif';
import './App.css';
import './UserView.css';

function UserView({ handleLogout }) {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [filePreviews, setFilePreviews] = useState([]);
    const [deliverableLink, setDeliverableLink] = useState('');

    // Fetch the hyperlink from deliverables.txt
    const fetchDeliverableLink = async () => {
        try {
            const response = await fetch('http://localhost:5010/deliverables-link');
            if (response.ok) {
                const data = await response.json();
                setDeliverableLink(data.link);
            } else {
                console.error('Failed to fetch the deliverable link');
            }
        } catch (error) {
            console.error('Error fetching deliverable link:', error);
        }
    };

    // Fetch deliverable link on component mount
    useEffect(() => {
        fetchDeliverableLink();
    }, []);

    const handleFileSelection = (event) => {
        const files = Array.from(event.target.files);
        setSelectedFiles(files);

        const previews = files.map((file) =>
            file.type.startsWith("image/") ? URL.createObjectURL(file) : null
        );
        setFilePreviews(previews);
    };

    const handleFileUpload = async () => {
        if (selectedFiles.length === 0) {
            alert("No files selected for upload!");
            return;
        }

        const formData = new FormData();
        selectedFiles.forEach((file) => {
            formData.append('files', file);
        });

        try {
            const response = await fetch('http://localhost:5010/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Files uploaded successfully:', data);
                alert('Files have been uploaded to the server!');
                setSelectedFiles([]);
                setFilePreviews([]);
            } else {
                console.error('File upload failed');
                alert('Failed to upload files to the server.');
            }
        } catch (error) {
            console.error('Error uploading files:', error);
            alert('An error occurred while uploading files.');
        }
    };

    const onLogoutClick = () => {
        handleLogout();
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
                    <button className='book-button' onClick={onLogoutClick}>Logout</button>
                </div>
            </div>

            <div className='user-view-heading'>
                <h1>User Dashboard</h1>
            </div>

            <div className='user-dash'>
                <h2>Upload</h2>
                <div>
                    <h3>Select Photos or Files:</h3>
                    <input
                        type="file"
                        multiple
                        onChange={handleFileSelection}
                        accept="image/*, .pdf, .docx, .txt"
                    />
                </div>

                <div className="uploaded-files">
                    <h3>Selected Photos Previews:</h3>
                    <div className="previews">
                        {filePreviews.map((preview, index) => (
                            preview ? (
                                <div key={index} className="file-preview">
                                    <img
                                        src={preview}
                                        alt="Preview"
                                        style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                    />
                                </div>
                            ) : (
                                <div key={index} className="file-preview">
                                    <p>Non-image file selected</p>
                                </div>
                            )
                        ))}
                    </div>
                </div>
                <button className="save-button" onClick={handleFileUpload}>
                    Upload Files to Server
                </button>
            </div>

            <div className='user-dash'>
                <h2>Download</h2>
                <div>
                    <h3>Virtual Tour Link:</h3>
                    {deliverableLink ? (
                        <a href={deliverableLink} target="_blank" rel="noopener noreferrer">
                            Click here to view the virtual tour
                        </a>
                    ) : (
                        <p>No link available.</p>
                    )}
                </div>
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