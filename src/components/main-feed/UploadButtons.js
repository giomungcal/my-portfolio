import React, { useContext } from 'react'

import todo_button from '../../imgs/buttons/my-portfolio_todo.png'
import photo_button from '../../imgs/buttons/my-portfolio_photo.png'
import { ThemeContext } from '../../contexts/ThemeContext';
import { PhotoPostContext } from '../../contexts/PhotoPostContext';

const UploadButtons = () => {
    const { theme, changeTheme } = useContext(ThemeContext);

    return (
        <div className="buttons-container">
            <a href="https://facebook.com" ><img className="upload-butt" src={photo_button} alt="UploadButton_Photo" /></a>
            <a href="https://facebook.com" ><img className="upload-butt" src={todo_button} alt="UploadButton_Todo" /></a>
            <input className="toggle-theme" id="switch" type="checkbox" value={theme} onChange={changeTheme} />
            <label className="theme-label" htmlFor="switch">Toggle</label>
        </div>
    )
}

export default UploadButtons
