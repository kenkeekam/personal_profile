import React from 'react'
import "./Contact.css"

function Contact() {
    return (
        <div className="contact">
            <div className="contact__info">
                <h1>I'm Kenneth Yip</h1>
                <h2>Contact Me</h2>
            </div>

    <form action="">
        <div className="contact__input">
            <h4 className="contact__email">Email</h4>
            <input type="text" placeholder="Enter email"/>
            <h4 className="contact__message">Message</h4>
            <input className="contact__inputMessage" type="text" placeholder="Please share your message here..."/>
            
        </div>
        <div className="contact__button">
         <button className="contact__submit">Submit</button>
        </div>
        
    </form>
        </div>
    )
}

export default Contact
