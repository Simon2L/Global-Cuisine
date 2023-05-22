import React from 'react'
import "./Footer.css"
import {BsYoutube, BsTwitter, BsInstagram, BsLinkedin, BsGithub} from "react-icons/bs"

const Footer = () => {
  return (
    <div className='footer'>
        <div className='sb__footer section__padding'>
            <div className='sb__footer-links'>
                <div className='sb__footer-links_div'>
                    <b>For Business</b>
                    <a href="/theTeam">
                        <p>Employer</p>
                    </a>
                    <a href="https://en.wikipedia.org/wiki/Health_insurance" target="_blank">
                        <p>Health Plan</p>
                    </a>
                   
                </div>
                <div className='sb__footer-links_div'>
                    <b>Help</b>
                    
                    <a href="/contact">
                        <p>Contact us</p>
                    </a>
                    
                </div>
                <div className='sb__footer-links_div'>
                    <b>Partner</b>
                    <a href="https://spoonacular.com/" target="_blank">
                        <p>Spoonacular</p>
                    </a>
                </div>
                <div className='sb__footer-links_div'>
                    <b>About Us</b>
                    <a href="/about">
                        <p>Summary</p>
                    </a>
                    <a href="/theTeam">
                        <p>Team</p>
                    </a>
                    
                </div>
                <div className='socialmedia'>
                    <b>Social Platform</b>
                    <div>
                        <a href="https://www.youtube.com/watch?v=_ZXeFPpPJeI&ab_channel=ChuckDrake" aria-label="to our youtube" target="_blank"><BsYoutube></BsYoutube></a>
                        <a href="https://twitter.com/" aria-label="to our twitter" target="_blank"><BsTwitter></BsTwitter></a>
                        <a href="https://www.instagram.com/" aria-label="to our instagram" target="_blank"><BsInstagram></BsInstagram></a>
                        <a href="https://github.com/Simon2L/Global-Cuisine" aria-label="to our github" target="_blank" ><BsGithub></BsGithub></a>   
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