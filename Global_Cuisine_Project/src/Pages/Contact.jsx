import './Contact.css'
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';



export default function Contact() {
    const [state, setState] = useState({user_name: "", user_email: "", message: ""});
    const form = useRef();
    const [isAlertVisible, setAlertVisible] = useState(false);

    const handleButtonClick = () => {
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
      },5000);
    }
    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_q0kepie', 
        'template_bgsvdhk', 
        form.current, 
        'rU_tPkWOBGCoU9Lzv')
      
      setState({user_name: "", user_email: "", message: ""});
    
      
  };

  return (
    <div className="contact-container">
        <h2>Do you want to get in touch?</h2>
        <h3>Just complete the form below and your message will be sent to us!</h3>
         <hr></hr>    
        <form ref={form} onSubmit={sendEmail} className='contact-form'>
        <input type="hidden" name="from_name" value="GlobalCuisine" />
        <label>Name :</label>
        <input type="text" name="user_name" className='form-input' 
         required value={state.user_name}
         onChange={(e) =>{ setState({...state, user_name: e.target.value})}}/>
        <label>Email :</label>
        <input type="email" name="user_email" className='form-input' required
         value={state.user_email}
         onChange={(e) =>{ setState({...state, user_email: e.target.value})}} />
        <label>Message :</label>
        <textarea name="message" className='form-message'
         value={state.message}
         onChange={(e) =>{ setState({...state, message: e.target.value})}}/>
        <button type="submit" value="Send" className='form-button' 
         onClick={handleButtonClick}>Send</button>
         {isAlertVisible && 
         <div className='alert'>
          <label>Your message has been sent. Thank you for your feedback!</label>
          </div>}
        </form>
        
    </div>
  );
};

