import React from 'react'
import "./Footer.css"
import {BsYoutube, BsTwitter, BsInstagram, BsLinkedin, BsGithub} from "react-icons/bs"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='sb__footer section__padding'>
            <div className='sb__footer-links'>
                <div className='sb__footer-links_div'>
                    <h4>For Business</h4>
                    <a href="/theTeam">
                        <p>Employer</p>
                    </a>
                    <a href="https://en.wikipedia.org/wiki/Health_insurance" target="_blank">
                        <p>Health Plan</p>
                    </a>
                   
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Help</h4>
                    
                    <a href="/contact">
                        <p>Contact us</p>
                    </a>
                    
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Parters</h4>
                    <a href="https://spoonacular.com/" target="_blank">
                        <p>Spoonacular</p>
                    </a>
                </div>
                <div className='sb__footer-links_div'>
                    <h4>About Us</h4>
                    <a href="/about">
                        <p>Summary</p>
                    </a>
                    <a href="/theTeam">
                        <p>Team</p>
                    </a>
                    
                </div>
                <div className='socialmedia'>
                    <h4>Social Platform</h4>
                    <div>
                        <a href="https://www.youtube.com/watch?v=_ZXeFPpPJeI&ab_channel=ChuckDrake" target="_blank"><BsYoutube></BsYoutube></a>
                        <a href="https://twitter.com/" target="_blank"><BsTwitter></BsTwitter></a>
                        <a href="https://www.instagram.com/" target="_blank"><BsInstagram></BsInstagram></a>
                        <a href="https://github.com/Simon2L/Global-Cuisine" target="_blank" ><BsGithub></BsGithub></a>   
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
            <a href="https://en.wikipedia.org/wiki/Terms_of_service" target="_blank"><div><p>Terms & Condition</p></div></a>
            <a href="https://en.wikipedia.org/wiki/Privacy_policy" target="_blank"><div><p>Privacy</p></div></a>
            <a href="https://en.wikipedia.org/wiki/Security_policy" target="_blank"><div><p>Security</p></div></a>
            <a href="https://en.wikipedia.org/wiki/HTTP_cookie" target="_blank"><div><p>Cookies Declaration</p></div></a>
        </div>
    </div>

    </div>
  )
}

export default Footer