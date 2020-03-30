import React from 'react'
import './navbar.css'

import logo from '../../imgs/navbar-imgs/my-portfolio_logo.png'
import home from '../../imgs/navbar-imgs/my-portfolio_home.png'
import about from '../../imgs/navbar-imgs/my-portfolio_about.png'
import contactme from '../../imgs/navbar-imgs/my-portfolio_contact.png'

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="navbar">
                <img className="logo" src={logo} />
                <div></div>
                <img className="nav-butt" src={home} />
                <img className="nav-butt" src={about} />
                <img className="nav-butt" src={contactme} />
            </div>
        </div>
    )
}

export default Navbar
