
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Top/Home';
import Contact from './Top/Contact';
import { FaFacebook, FaTwitter, FaYoutube, FaTiktok, FaInstagram } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBars, faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import Course from './Top/Course';
import About from './Top/About';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div>
      <Router>
        <div className='background-container'>

        <div className='SocialMedia'><SocialMedia/></div>  
          <p className='phone-number'> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>+251921225887</p>
          <FontAwesomeIcon className='faEnvalope' icon={faEnvelope}></FontAwesomeIcon> <p className='gmail'>Danid93575@gmail.com</p>

          <a className='Form' href='#'><FontAwesomeIcon  icon={faUser}></FontAwesomeIcon> Log in || Sign up</a>
            
            <nav className='link-overlay'>
            <ul  className='Nav-Link'>
            <FontAwesomeIcon className='bar' icon={faBars}></FontAwesomeIcon>  <ls ><Link  className='nav-link' to={"/"}>Home</Link></ls>
              <ls><Link className='nav-link' to={"/Course"}>Course  </Link></ls>
              <ls><Link className='nav-link' to={"/About"}>Aboute Us</Link></ls>
              <ls> <Link className='nav-link' to={"/Contact"}>Contact us</Link></ls>
            </ul>
          </nav>

       {/* <h1>Wellcome To Our 
        <br/>
        website
       </h1> */}

      
        </div>
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path='/#' element={<About/>}/>
          <Route path='/#' element={<Course/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  )
}

const SocialMedia = () => {
  return (
    <div className="social-media">
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


export default App;