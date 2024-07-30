import React from 'react'
import'./Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
   <img src={assets.logo} alt="" />
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Perferendis sapiente sed ipsam fuga reiciendis dolorum fugit labore laboriosam hic dolores neque, 
     unde recusandae error, aperiam asperiores!</p>
     <div className="footer-social-icons">
        <img src={assets.facebook_icon}alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />
     </div>

            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>

            </div>
            <div className="footer-right-content">
           <h2>GET IN TOUCH</h2>
           <ul>
            <li>8307292210</li>
            <li>abc@gmail.com</li>
            
           </ul>
            </div>
        </div>
        <hr/>
    <p className="footer-copyright">
        Copyright @ 2024 here which can we see
    </p>
    </div>
  )
}

export default Footer