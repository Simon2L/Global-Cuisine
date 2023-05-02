import './Contact.css'
import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';



export default function Contact() {
    const [state, setState] = useState({user_name: "", user_email: "", message: ""});
    const form = useRef();
    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_q0kepie', 
        'template_bgsvdhk', 
        form.current, 
        'rU_tPkWOBGCoU9Lzv')
      .then((result) => {
          alert("Success! Your message has been sent. Thank you for your feedback!");
      }, (error) => {
          alert("Error! Something went wrong! Try again!");
      });
      setState({user_name: "", user_email: "", message: ""});
    
      
  };

  return (
    <div className="contact-container">
        <h2>Do you want to get in touch?</h2>
        <h3>Just complete the form below and your message will be sent to us!</h3>
         <hr></hr>    
        <form ref={form} onSubmit={sendEmail} className='contact-form'>
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
         >Send</button>
        </form>
        
    </div>
  );
};

