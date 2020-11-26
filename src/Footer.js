import React from 'react'
import "./Footer.css"
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';

function Footer() {
    return (
        <div className="footer">
            
            <div className="footer__contact">
                <h2>Feel free to contact me</h2>
                <p>I'm open to new opportunities and chatting</p>
                <button>Get in touch</button>
            </div>

            <div className="footer__extra">
                <p>Help me improve my website</p>
            </div>
           

          <div className="footer__row">
          <div className="footer__column">
                {/* Copyright Icon */}
                 <p className="footer__copyright">© Copyright 2020</p>
             </div>
            <div className="footer__column">
                <h5>Links</h5>
                 <p>Home</p>
                 <p>Portfolio</p>
                 <p>Contact</p>
             </div>
             <div className="footer__column">
                <h5>Services</h5>
                <p>Web Development</p>
             </div>
             <div className="footer__column">
                <h5>Have a question?</h5>
                <p>kenny#1140</p>
                <p><MailOutlineIcon className="footer__icon"/> kenkeekam@gmail.com</p>
                <p><GitHubIcon className="footer__icon"/> kenkeekam</p>
                <p><PhoneEnabledIcon className="footer__icon"/> +44 7570802218</p>
              </div>
            </div>
        </div>
    )       
}

export default Footer
