// HomePage.js
import React, { useRef} from 'react';
import logo from './abc-logo.avif'; // Update to point to your logo file
import text1img from './text1img.jpeg'; // Update to point to your image file
import videoFile from './newvideo.mp4'; // Adjust the path if necessary
import './App.css'; // You can rename or create a separate CSS file for HomePage if needed

function HomePage() {

    // Define refs for each section
    const why360Ref = useRef(null);
    const servicesRef = useRef(null);
    const contactRef = useRef(null);
  
    // Scroll function to smooth-scroll to a section
    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };



    return (
        <div className="HomePage">
                <div>
                    <div className="header">
                        <div className='logo' onClick={() => window.location.href = "/"} style={{ cursor: 'pointer' }}>
                            <img src={logo} className='logo' alt='logo'/>
                        </div>
                        <div className="center-buttons">
                            <button onClick={() => scrollToSection(why360Ref)}>Why 360° Tours?</button>
                            <button onClick={() => scrollToSection(servicesRef)}>Our Services</button>
                            <button onClick={() => scrollToSection(contactRef)}>Contact Us</button>
                        </div>
                        <div className='book'>
                            <button className='book-button' onClick={() => window.location.href = "/authentication"}>Log in</button>
                        </div>
                    </div>

                    <div className='background-image'>
                        <div className='title-container'>
                            <h1>360° Virtual Tours For Real Estate</h1>
                        </div>
                    </div>

                    <div ref={why360Ref} className='content1'>
                        <div className='photo1'>
                            <img src={text1img} alt='' className='image1'/>
                        </div>
                        <div className='content1-text1'>
                            <div className='content1-text1-heading'>
                                <h2>What is a 360° Virtual Tour?</h2>
                            </div>
                            <div className='content1-text1-text'>
                                <p>A 360° virtual tour offers a <b>realistic view of a property</b>, letting users explore every angle as if they were physically there. It transforms real estate marketing by making listings more engaging.
                                    <br /><br />
                                    These tours <b>save time and money</b> for agents, help sell properties faster, and create a strong emotional connection with buyers.
                                    <br /><br />
                                    With faster internet and high-resolution devices, virtual tours are now accessible on any smartphone or tablet, making property viewing <b>easy and convenient</b>.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='content2'>
                        <div className='content2-heading'>  
                            <h2>What are the Benefits?</h2>
                        </div>
                        <div className='content2-container'>
                            <div className='content2-textbox-line1'>
                                <div className='content2-text1'>
                                    <div className='content2-text1-heading'>Generate Faster Sales</div>
                                    <div className='content2-text1-text'>360° tours provide a clear view of properties, building customer trust and encouraging quicker purchasing decisions.</div>
                                </div>
                                <div className='content2-text2'>
                                    <div className='content2-text2-heading'>Grab Attention Easily</div>
                                    <div className='content2-text2-text'>Immersive tours help properties stand out and attract more leads, creating a connection with potential buyers.</div>
                                </div>
                                <div className='content2-text3'>
                                    <div className='content2-text3-heading'>Realistic Experience</div>
                                    <div className='content2-text3-text'>Virtual tours offer a “24/7 open house,” allowing buyers to view properties anytime, anywhere, helping them imagine living in the space.</div>
                                </div>
                            </div>
                            <div className='content2-textbox-line2'>
                                <div className='content2-text4'>
                                    <div className='content2-text4-heading'>Share Anywhere</div>
                                    <div className='content2-text4-text'>Easily share virtual tours across social media, emails, and messaging apps to reach a broader audience.</div>
                                </div>
                                <div className='content2-text5'>
                                    <div className='content2-text5-heading'>Minimize Bounce Rate</div>
                                    <div className='content2-text5-text'>360° tours keep viewers on your site longer, boosting engagement and improving search engine rankings.</div>
                                </div>
                                <div className='content2-text6'>
                                    <div className='content2-text6-heading'>Saves Time and Money</div>
                                    <div className='content2-text6-text'>Virtual tours let buyers pre-select properties to visit in person, saving time for both agents and clients.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={servicesRef} className='content3'>
                        <div className='content3-text1'>
                            <div className='content3-text1-heading'>
                                <h2>Our Services</h2>
                            </div>
                            <div className='content3-text1-text'>
                                <p><b>Immersive 360° Virtual Tours</b> Experience properties like never before with high-definition, interactive 360° virtual tours that let clients explore spaces as if they’re physically there.
                                    <br /><br />
                                    <b>Customizable Virtual Tour Packages</b> Our customizable tour packages are designed to meet the needs of real estate agents, property managers, and homeowners, enhancing your property’s appeal.
                                    <br /><br />
                                    <b>Easy Website Integration</b> Share virtual tours effortlessly on your website and social media, expanding property visibility and accessibility.
                                    <br /><br />
                                    <b>Enhanced Marketing Tools</b> We offer additional marketing options, including high-quality photos, videos, and interactive floor plans to attract and engage leads.
                                    <br /><br />
                                    <b>Dedicated Support</b> Our team provides guidance and support for a smooth experience from setup to optimization.
                                </p>
                            </div>
                        </div>
                        <div className='video-container'>
                            <video className="video-element" src={videoFile} autoPlay loop muted playsInline />
                        </div>
                    </div>

                    <div ref={contactRef} className="content4">
                        <div className='content4-text'>
                            <div className="content4-text-heading">
                                <h2>Get in Touch</h2>
                            </div>
                            <div className='content4-text-text'>
                                <p>If you want to learn more about our virtual tour services, get a customized quote, or arrange for professional photos to be taken, please fill out the form below. One of our experienced professionals will be in touch with you shortly!</p>
                            </div>
                        </div>
                        <div className="content4-form">
                            <form action="https://formspree.io/f/xkgnozzw" method="POST">
                                <label>Name: <input type="text" name="name" required /></label>
                                <label>Phone: <input type="tel" name="number" required /></label>
                                <label>Email: <input type="email" name="email" required /></label>
                                <label>Project Information: <textarea name="message" rows="4" required></textarea></label>
                                <button type="submit">Submit</button>
                            </form>
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

        </div>
    );
}

export default HomePage;
