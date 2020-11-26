import React from 'react';
import './Header.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="header__nav">
                <Link to="/"> 
                <div className="header__option">
                    <span className="header__optionLine">HOME</span>
                </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLine">PORTFOLIO</span>
                </div>
                <Link to="/contact"> 
                <div className="header__option">
                    <span className="header__optionLine">CONTACT</span>
                 </div>
                </Link> 

                 <div className="header__navTwo">
                    <div className="header__option">
                        <span className="header__optionLine"><MailOutlineIcon className="header__icon" /></span>
                    </div>
                    <div className="header__option">
                     <span className="header__optionLine"><GitHubIcon className="header__icon"/></span>
                    </div>
                 </div>
             </div>
          </div>
     
         
    )
}

export default Header
