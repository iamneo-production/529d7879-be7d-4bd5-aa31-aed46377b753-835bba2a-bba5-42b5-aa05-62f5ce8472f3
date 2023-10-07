import React from 'react'
import '../Assets/CSS/HomePage.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MapIcon from '@mui/icons-material/Map';
import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/Call';
import { useNavigate } from 'react-router-dom';
function Footer() {
  const nav=useNavigate("");
  const tc=()=>{
    nav("/terms")
  }
  const pp=()=>{
    nav("/privacy")
  }
  const faq=()=>{
    nav("/faq")
  }
  const feedback=()=>{
    nav("/feedback")
  }
  const contactus=()=>{
    nav("/contactus")
  }
  return (
    <div className='footer1'>
<footer class="flex-rw">
  <ul class="footer-list-top">
    <li>
      <h4 class="footer-list-header">RESERVATIONS</h4></li>
    <li><a class="generic-anchor footer-list-anchor" >Modify/Cancel</a></li>
    <li><a class="generic-anchor footer-list-anchor" >Reserve Books</a></li>
  </ul>
  <div className='line'></div>
  <ul class="footer-list-top">
    <li>
      <h4 class="footer-list-header">CUSTOMER SERVICE</h4></li>
    <li><a class="generic-anchor footer-list-anchor">Customer Service</a></li>
    <li><a class="generic-anchor footer-list-anchor" style={{cursor:'pointer'}} onClick={contactus}>Contact Us</a></li>
    <li><a class="generic-anchor footer-list-anchor" style={{cursor:'pointer'}} onClick={feedback}>Feedback</a></li>

    </ul>
    <div className='line'></div>
  <ul class="footer-list-top">
    <li id='help'>
      <h4 class="footer-list-header">PLEASE HELP ME</h4></li>
    <li><a class="generic-anchor footer-list-anchor" style={{cursor:'pointer'}} onClick={faq} >FAQs</a></li>
    <li><a class="generic-anchor footer-list-anchor" >For Enquiry</a></li>
    <li><a class="generic-anchor footer-list-anchor">Raise a Complaint</a></li>
  </ul>
  <div className='line'></div>
  <ul className='footer-list-top'>
  <li>
  <h4 class="footer-list-header">FOLLOW US ON:</h4></li>
  <li>
  <a class="generic-anchor footer-list-anchor" href="https://www.facebook.com/"><FacebookIcon fontSize='medium'/></a>
  <a class="generic-anchor footer-list-anchor" href='https://www.instagram.com/'><InstagramIcon fontSize='medium'/></a>
  <a class="generic-anchor footer-list-anchor" href='https://www.linkedin.com/'><LinkedInIcon fontSize='medium'/></a>
  <a class="generic-anchor footer-list-anchor" href='https://www.pinterest.com/'><PinterestIcon fontSize='medium'/></a>
  <a class="generic-anchor footer-list-anchor" href='https://www.youtube.com/'><YouTubeIcon fontSize='medium'/></a>
  <a class="generic-anchor footer-list-anchor" href='https://web.telegram.org/'><TelegramIcon fontSize='medium'/></a>
  <a class="generic-anchor footer-list-anchor" href='https://twitter.com/'><TwitterIcon fontSize='medium'/></a>
  </li>
  <br/>
  <li>
  <a class="generic-anchor footer-list-anchor"><CallIcon fontSize='small' className='icon'/>   +91 7895461230  </a>
  </li>
  <br/>
  <li>
  <a class="generic-anchor footer-list-anchor"><MapIcon fontSize='small' className='icon'/>  SKCT, Kovaipudur, <br/>&nbsp; Coimbatore, TN 641042</a>
  </li>
  </ul>
</footer>
<section className='small'>
<span className='pp' style={{cursor:'pointer'}} onClick={pp}>Privacy Policy</span>
<div className='line1'></div>
<span className='tc' onClick={tc}> Terms & Conditions</span>
<div className='line1'></div>
Cookie Center
<div className='line1'></div>
Security & Safety
<div className='line1'></div>
Dont sell Personal Information
<div className='line1'></div>
© 2023 ABC Corporation
</section>
    </div>
  )
}
export default Footer
