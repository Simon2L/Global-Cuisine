import React from 'react'
import "./Footer.css"
import {BsYoutube, BsTwitter, BsInstagram, BsLinkedin} from "react-icons/bs"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='sb__footer section__padding'>
            <div className='sb__footer-links'>
                <div className='sb__footer-links_div'>
                    <h4>For Business</h4>
                    <a href="#">
                        <p>Employer</p>
                    </a>
                    <a href="#">
                        <p>Health Plan</p>
                    </a>
                    <a href="#">
                        <p>Individual</p>
                    </a>
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Help</h4>
                    
                    <a href="#">
                        <p>Contact us</p>
                    </a>
                    
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Parters</h4>
                    <a href="#">
                        <p>Spoonacular</p>
                    </a>
                </div>
                <div className='sb__footer-links_div'>
                    <h4>About Us</h4>
                    <a href="#">
                        <p>Summary</p>
                    </a>
                    <a href="#">
                        <p>Team</p>
                    </a>
                    
                </div>
                <div className='socialmedia'>
                    <h4>Cooming soon</h4>
                    <div className='socialmedia-Icon'>
                    <a href="#" ><BsYoutube></BsYoutube></a>
                    <a href="#" ><BsTwitter></BsTwitter></a>
                    <a href="#" ><BsInstagram></BsInstagram></a>
                    <a href="#" ><BsLinkedin></BsLinkedin></a>
                    </div>
                </div>
            </div>
        </div>

    <hr />

    <div className='sb__footer-below'>
        <div className='sb__footer-copyright'>
            <p>
                @{new Date().getFullYear()} CodeInn. All right reserved.
            </p>
        </div>
        <div className='sb__footer-below-links'>
            <a href="#"><div><p>Terms & Condition</p></div></a>
            <a href="#"><div><p>Privacy</p></div></a>
            <a href="#"><div><p>Security</p></div></a>
            <a href="#"><div><p>Cookies Declaration</p></div></a>
        </div>
    </div>

    </div>
  )
}

export default Footer