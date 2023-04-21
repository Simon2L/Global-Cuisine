import './Contact.css'

export default function Contact() {
    return (
        <div className="contact-container">
            <form className="contact-form">
                <div className='form-input'>
                    <label htmlFor="name" className='name-input' >Name :  </label>
                    <input id="name" type="text" placeholder=""                    ></input>
                </div>
               
                <div className='form-input'>
                    <label htmlFor="mail" className='name-input' >Email :      </label>
                    <input id="mail" type="text" placeholder=""></input>
                </div>
                
                <div className='message-container'>
                    <label htmlFor="message" >Message :   </label>
                    <input id="message" type="text" placeholder=""
                    className='message-input'></input>
                </div>
                <button type="submit" >Send</button>
            </form>
        </div>
    )
}