import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
       <div className="footer-content">
        <div className="footer-content-left">
<img src={assets.logo} alt="" />
<p>At Tomoto, we bring the best local restaurants straight to your door. Whether you're craving sushi, pizza, or a healthy salad, we've got you covered. With our easy-to-use platform, you can browse, order, and enjoy your favorite meals without leaving the comfort of your home.</p>
 <div className="footer-social-icon">
    <img src={assets.facebook_icon} alt="" />
    <img src={assets.linkedin_icon} alt="" />
    <img src={assets.twitter_icon} alt="" />
    </div>        
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-987=6544</li>
          <li>contact@tomato.com</li>
          </ul>
        </div>
       </div>
       <hr />
       <p className="footer-copyright">Copyright 2024 &copy;Tomoto.com-All Right Reserved.</p>
    </div>
  )
}

export default Footer
