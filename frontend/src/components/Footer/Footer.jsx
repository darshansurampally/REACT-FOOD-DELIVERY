import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p style={{ marginTop: '20px' }}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maiores autem cum tenetur doloremque placeat quas sunt amet ratione ipsa fugiat sed repellat velit quidem, quisquam eveniet officiis inventore accusantium!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                 <li>Home</li>
                 <li>About Us</li>
                 <li>Delivery</li>
                 <li>privacy policy</li>

                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+917899556206</li>
                    <li>surampallydarshan@gamil.com</li>
                </ul>
            </div>
        </div>

      <hr />
      <p className='footer-copyright'>Copyright 2024 &copy; tomato.com -All Rights Reserved</p>
    </div>
  )
}

export default Footer;
