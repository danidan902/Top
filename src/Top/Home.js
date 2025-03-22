import React from 'react';
import './Top.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {   faEnvelope, faPhone, } from "@fortawesome/free-solid-svg-icons";
import { FaFacebook, FaTwitter, FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa';
import web from './img/web.jpg';
import Post from './img/designe.jpg';
import ima from './img/digital.jpg';
import Button from 'react-bootstrap/Button';
import Post1 from './img/meeting.jpg';
import top2 from './img/top2.jpg';
import top3 from './img/top3.jpg';
import top4 from './img/top4.jpg';
import explain from './img/grap.mp4';
import digital from './img/vidoe web.mp4';
import marketing from './img/ai.mp4';
import marketing2 from './img/marketing.mp4';

function Home() {
  return (
    <div>
        <h1 className='Course'> Course</h1>
              
        <div className='div'>
         <img className='img' src={Post} alt='selected'></img>
         <div>
            <h3 className='graphics'>Graphics Designe</h3>
            <p className='paragraph'>Our graphic design institute is
              renowned  <br/> for its rigorous and 
              comprehensive of this ,  <br/> designed 
               to equip students with the skills  <br/> and 
                knowledge necessary to excel in the  <br/>
                ever-evolving field of visual communication.</p>
         </div>
       
      <div>
        <img className='web-devl' src={web} alt='selacted'></img>
          <div>
            <h3 className='Website-devl'>Website Devlopment</h3>
            <p className='paragraph-2'>
            Our website development team <br/>
            comprises seasoned professional  <br/>
             with a deep understanding of the   <br/>
             latest web technologies, user experience  <br/>
              principles, and accessibility standards. 
            </p>
          </div>
      </div>

      <div>
        <img className='Digital-mark' src={ima} alt='selected'></img>
        <div>
          <h3 className='digital-marketing'>Digital Marketing</h3>
          <p className='Top-digital'>
          "At Top Institute, we understand <br/>
          that effective digital marketing  <br/>
          is the cornerstone of success in  <br/>
          today's competitive landscape. Our  <br/>
          team comprises  digital Marketing.  <br/>
         
          </p>

        
        </div>
      </div>
      <Button className="Top-button" variant="outline-success">
        <span className="Top-suc"> Success</span>
      </Button>

      <Button className="Top-button-1" variant="outline-success">
        <span className="Top-suc-1"> Success</span>
      </Button>

      <Button className="Top-button-2" variant="outline-success">
        <span className="Top-suc-2"> Success</span>
      </Button>

        </div>
  <br></br> <br></br> <br></br>
<div className='div-1'>
  <h2 className='Aboute-us'>About Us</h2>
  <p className='paragraph-3'>"Top Institute is dedicated to fostering innovation and <br/>
    developing the next generation of leaders. We provide a dynamic <br/>
    and collaborative learning environment that encourages creativity, <br/>
    critical thinking, and problem-solving. Our unique programs blend  <br/>
    theoretical knowledge with practical application, preparing individuals <br/>
    to tackle complex challenges and drive positive change. Through leadership <br/>
    training, mentorship programs, and experiential learning opportunities, <br/>
    we empower individuals to unlock their full potential and make a significant  <br/>
    impact on the world. Lead with confidence, learn at Top Institute."</p>
</div>
<div>
  <img className='Top-meeting' src={Post1}></img>
</div>

 <div>
    <h2 className='Top-Gallery'>Gallery</h2>
    <img className='top2-img' src={top2} alt='selacted'></img>
    <img className='top3-img' src={top3} alt='selacted'></img>
    <img className='top4-img' src={top4} alt='selacted'></img>
 </div>

          <div>
            <h2 className='top-video'>Videos</h2>
          </div>
          <div>
            <VideoPlayer/>
            
          </div>
          <h2 className='contact'>Contact Us</h2>
          <div><LocationMap/></div>
          <div><SocialMedia/></div>
          <div className='div-phone'>
            <p className='last-phone'> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>+251921225887</p>
         <FontAwesomeIcon className='last-icon'  icon={faEnvelope}></FontAwesomeIcon>   <p  className='last-gmail'>Danid93575@gmail.com</p>
          </div>
          <div className='div3'>
          <footer className="footer-web">  
                <p>&copy; 2025 My portfolio Webpage</p>  
            </footer>  
          </div>
          
    </div>
    
  )
}

const VideoPlayer = () => {
  return (
    <div className='Top-video-2'>
      <video className='Top-video' controls>
        <source src={marketing} type="video/mp4" />
        
      </video>

      <video className='Top-video-3' controls>
        <source src={explain} type='video/mp4'></source>
      </video>

      <video id="myVideo" className='Top-video-3' controls>
        <source src={digital} type='video/mp4'></source>
      </video>

      <video className='Top-video-3' controls>
        <source src={marketing2} type='video/mp4'></source>
      </video>
    </div>
  );
};

// window.onload = function() {
//   // Get the video element
//   const video = document.getElementById("myVideo");

//   // Set a timeout to play the video after 5 seconds (5000 milliseconds)
//   setTimeout(function() {
//     video.play(); // Start playing the video
//   }, 5000); // 5000 milliseconds = 5 seconds
// };






const LocationMap = () => {
  return (
    <div className="google-map">
      <iframe
        title="Google-Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.785036783703!2d38.8024949!3d9.0254755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859e664faf0f%3A0x9c4c66fa2e147eba!2sTop%20Training%20Institute!5e0!3m2!1sen!2set!4v1698765432100!5m2!1sen!2set"
        width="100%"
        height="450"
        style={{ border: 0, marginTop:60}}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
const SocialMedia = () => {
  return (
    <div className="social">
      <a href="https://www.facebook.com/share/15jErHS3K3/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://danidan.mystrikingly.com/" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://www.youtube.com/@DaniDan-u4z" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </a>
      <a href="https://dand93575.wixsite.com/danidan-website" target="_blank" rel="noopener noreferrer">
        <FaInstagram />

      </a>
      <a href="https://.tiktok.com/@danidan659" target="_blank" rel="noopener noreferrer">
        <FaTiktok />
      </a>
    </div>
  )
}

export default Home;