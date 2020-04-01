import React, { useContext } from 'react'
import './navbar.css'
import {  Link } from 'react-router-dom'

import logo from '../../imgs/navbar-imgs/my-portfolio_logo.png'
import home from '../../imgs/navbar-imgs/my-portfolio_home.png'
import about from '../../imgs/navbar-imgs/my-portfolio_about.png'
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
                        <Link to="/my-portfolio"><img className="nav-butt" src={home} alt="Home" /></Link>
                        <Link to="/my-portfolio/about"><img className="nav-butt" src={about} alt="About" /></Link>
                        <img className="nav-butt" src={contactme} alt="Contact" />                
                </div>
            </div>
    )
}

export default Navbar
