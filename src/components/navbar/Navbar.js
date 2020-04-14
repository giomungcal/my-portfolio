import React, { useContext } from 'react'
import './navbar.css'
import {  Link } from 'react-router-dom'

import logo from '../../imgs/navbar-imgs/my-portfolio_logo.png'
import home from '../../imgs/navbar-imgs/my-portfolio_home.png'
import contactme from '../../imgs/navbar-imgs/my-portfolio_contact.png'
import { ThemeContext } from '../../contexts/ThemeContext'

const Navbar = () => {
    const { theme, darkTheme } = useContext(ThemeContext);
    const { navbar } = darkTheme;
    return (
            <div className="nav-container" style={{ backgroundColor: !theme && navbar  }} >
                <div className="navbar" >
                    <img className="logo" src={logo} alt="Logo" />
                    <div></div>
                        <Link to="/" exact="true"><img className="nav-butt" src={home} alt="Home" /></Link>                        
                        <a href="mailto: gcmungcal@gmail.com"><img className="nav-butt" src={contactme} alt="Contact" /></a>             
                </div>
            </div>
    )
}

export default Navbar
