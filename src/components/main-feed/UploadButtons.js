import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import todo_button from '../../imgs/buttons/my-portfolio_todo.png'
import photo_button from '../../imgs/buttons/my-portfolio_photo.png'
import { ThemeContext } from '../../contexts/ThemeContext';

const UploadButtons = () => {
    const { theme, changeTheme } = useContext(ThemeContext);

    return (
        <div className="buttons-container">
            <Link to="/hearts"><img className="upload-butt" src={photo_button} alt="UploadButton_Photo" /></Link>
            <a href="https://facebook.com" ><img className="upload-butt" src={todo_button} alt="UploadButton_Todo" /></a>

            {/* Toggle for Day/Night Mode */}
            <input className="toggle-theme" id="switch" type="checkbox" value={theme} onChange={changeTheme} />
            <label className="theme-label" htmlFor="switch">Toggle</label>
        </div>
    )
}

export default UploadButtons
