import './About.css'
import prepFood from '../assets/logo-no-background.png'
import { Link } from 'react-router-dom'

export default function About() {
 return (
    <div className='about-container'>
        <div className='image-container'>
            <img src={prepFood} alt="prep food" className='prepfood'></img>
        </div>
        <div className='title'>
            <h1>The only food recipe website you will ever need</h1>
            <hr className='divider'></hr>
        </div>
       <div className='about-info'>
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This website connects you to over 380.000 recipes, thousands of 
            ingredients, food products and useful information to help you prepare
            a healthy meal of your desire.<br/><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; All this was possible with the help of the Spoonacular Nutrition, Recipe and Food 
            API. We created a more user friendly website to make use of theirs years work
            and food information database.        
        </h3>
        <h2>Hope you enjoy our website and do not hesitate to recommend it to your friends!</h2>
       </div> 
       <div className='signature'>
        <h5>Have a nice meal,<br/><Link to={'/theTeam'}>Global Cuisine developer team</Link> </h5>
        </div>       
        
    </div>
 )
}