import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import portfolio_button from '../../imgs/buttons/my-portfolio_portfolio.png'
import hearts_button from '../../imgs/buttons/my-portfolio_hearts.png'
import { ThemeContext } from '../../contexts/ThemeContext';
import { PhotoPostContext } from '../../contexts/PhotoPostContext';

const HeaderButtons = () => {
    const { theme, changeTheme } = useContext(ThemeContext);
    const { photoPosts } = useContext(PhotoPostContext);

    if(photoPosts.find(f => (f.heart === true))){
        console.log(photoPosts.find(f => (f.heart === true)))
    }
    
    return (
        <div className="buttons-container">
            {
                // if(  )
            }
            <Link to="/hearts"><img className="link-butt" src={hearts_button} alt="Button_Photo" /></Link>
            <a href="https://giomungcal.github.io/gio-webportfolio/" target="_blank" rel="noopener noreferrer" ><img className="link-butt" src={portfolio_button} alt="Button_Portfolio" /></a>

            {/* Toggle for Day/Night Mode */}
            <input className="toggle-theme" id="switch" type="checkbox" value={theme} onChange={changeTheme} />
            <label className="theme-label" htmlFor="switch">Toggle</label>
        </div>
    )
}

export default HeaderButtons
