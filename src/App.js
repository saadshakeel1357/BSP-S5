import React, { useRef } from 'react';
import logo from './logo2.jpg'; // Update to point to your logo file
import text1img from './text1img.jpeg'; // Update to point to your logo file
import videoFile from './newvideo.mp4'; // Adjust the path if necessary

import './App.css';


function App() {
    // Define refs for each section
    const why360Ref = useRef(null);
    const servicesRef = useRef(null);
    const contactRef = useRef(null);
  
    // Scroll function to smooth-scroll to a section
    const scrollToSection = (ref) => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div className="App">

		<div className="header">
			<div className='logo'>
				<img src={logo} className='logo' alt='logo'/>
			</div>
        <div className="center-buttons">
          <button onClick={() => scrollToSection(why360Ref)}>Why 360° Tours?</button>
          <button onClick={() => scrollToSection(servicesRef)}>Our Services</button>
          <button onClick={() => scrollToSection(contactRef)}>Contact Us</button>
        </div>
			<div className='book'>
        <button className='book-button'>Log in</button>
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
          <p>A 360° virtual tour offers a comprehensive view of a property, allowing users to feel as if they are physically present without stepping inside. They can explore every angle, from the ceiling to the floor, and all around. These virtual tours revolutionize real estate marketing by bringing listings to life.
              <br></br><br></br>
              360° virtual tours help real estate agents save time and money, move properties faster, impress prospective buyers, and win more listings. 360° virtual tours help buyers build an immediate but lasting emotional connection to properties because they can have an immersive simulated experience.
              <br></br><br></br>
              Additionally, with internet speed getting faster and the resolution of the displays getting higher, technology has made virtual tours convenient and accessible to anyone with a smartphone or a tablet.
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
            <div className='content2-text1-heading'>
            Generate faster and more sales
            </div>  
            <div className='content2-text1-text'>
            When your listing has a 360° virtual tour, it delivers a unique perspective that helps customers quickly get a clear view of the key property details. This increases customer trust and encourages them to make a purchase faster as they have a more precise image of what they’re going to buy.
            </div>  
          </div>  
          
          <div className='content2-text2'>
            <div className='content2-text2-heading'>
            Easier to grab attention
            </div>  
            <div className='content2-text2-text'>
            360° virtual real estate tours allow the potential buyers to have an immersive experience of how the property looks. This helps your property stand out and attract more leads as the buyers naturally tend to feel more affinity with what they can see and imagine.
            </div>  
          </div>  

          <div className='content2-text3'>
            <div className='content2-text3-heading'>
            Provide a realistic experience
            </div>  
            <div className='content2-text3-text'>
            With 360° virtual tours, it’s always open house! Potential clients from anywhere and at any time can access the tour from their office, home or while on the road. This technology creates an instant sense of ownership in the potential buyer's minds and helps them imagine themselves living in that house.
            </div>            
          </div> 

        </div>
 

        <div className='content2-textbox-line2'>

          <div className='content2-text4'>
            <div className='content2-text4-heading'>
            Share the virtual tour with anyone, anywhere
            </div>  
            <div className='content2-text4-text'>
            There’s really no limit to where you can share your virtual tour! 360° virtual tours are easily sharable via Facebook, Instagram, Twitter, and Google – send them via email, Whatsapp, or any other messaging program.
            </div>              
          </div>  

          <div className='content2-text5'>
            <div className='content2-text5-heading'>
            Minimizes the bounce rate
            </div>  
            <div className='content2-text5-text'>
            360° virtual tours on your website allow people to spend more time on your website, exploring the property independently, thus increasing user engagement. As a result, the bounce rate will drop, traffic will increase, and search engine rankings will improve.
            </div>       
          </div>  

          <div className='content2-text6'>
            <div className='content2-text6-heading'>
            Saves money and time
            </div>  
            <div className='content2-text6-text'>
            360° virtual tours allow viewers to have an instant preview of the property and narrow down their favorites for in-person viewings. This not only saves the agent’s time and money but also that of the client.
            </div>   
          </div>  

        </div>
      
      </div>


    </div>


    <div ref={servicesRef} className='content3'>


    

      <div className='content3-text1'>

        <div className='content3-text1-heading'>
        <h2>Our services</h2>
        </div>

        <div className='content3-text1-text'>                  
          <p><b>Immersive 360° Virtual Tours</b> Bring properties to life with our high-definition 360° virtual tours, allowing clients to explore spaces as if they were physically present. This service provides a fully interactive experience that engages prospective buyers, helping them visualize themselves in the property from the comfort of their own device.
              <br></br><br></br>
              <b>Customizable Virtual Tour Packages</b> We offer flexible virtual tour packages tailored to fit each client’s needs. Whether you’re a real estate agent, property manager, or a homeowner, we can provide virtual tours that highlight the unique features of your property, helping you make a lasting impression.
              <br></br><br></br>
              <b>Seamless Integration with Your Website</b> Our virtual tours can be easily integrated into your website or shared across social media platforms, increasing the property’s visibility and accessibility. This allows prospective buyers to view the property anytime, anywhere, maximizing engagement.
              <br></br><br></br>
              <b>Enhanced Marketing Tools</b> In addition to 360° tours, we provide options for high-quality photos, videos, and interactive floor plans to further enhance property listings. These tools are proven to attract more leads and encourage deeper connections between buyers and listings.
              <br></br><br></br>
              <b>Technical Support and Guidance</b> We understand that technology can be challenging, so our dedicated support team is here to help you every step of the way. From setting up the tour to optimizing it for your site, we’re committed to ensuring a seamless experience.
          </p>
        </div>

      </div>


      <div className='video-container'>
        <video 
          className="video-element" 
          src={videoFile}

          autoPlay
          loop
          muted
          playsInline
          
        >
          Your browser does not support the video tag.
        </video>
      </div>

    </div>



    <div ref={contactRef} className="content4">
        <div className='content4-text'>
          <div className="content4-text-heading">
            <h2>Get in Touch</h2>
            </div>
          <div className='content4-text-text'>
            <p>If you want to learn more about our virtual tour services, get a customized quote, or arrange for professional photos to be taken, please fill out the form below.<br></br> One of our experienced professionals will be in touch with you shortly!</p>
          </div>

        </div>
        <div className="content4-form">
          <form 
            action="https://formspree.io/f/xkgnozzw" 
            method="POST"
          >
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Phone:
              <input type="tel" name="number" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Project Information:
              <textarea name="message" rows="4" required></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
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
            <p>Email: sd-creative@gmail.com</p>
            <p>Phone: +352 661 258 981</p>
          </div>

        </div>
        <div className="footer-bottom">
          <p>© SD Creative Consultuncy | All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
