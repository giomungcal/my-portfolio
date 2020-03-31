import React, { useContext } from 'react'
import './sidebar.css'
import { ThemeContext } from '../../contexts/ThemeContext';

const Sidebar = () => {
    const { theme, darkTheme } = useContext(ThemeContext);
    const { sidebar } = darkTheme;

    return (
        <div className="sidebar" >
            <div className="sidebar-box" style={{ 
                backgroundColor: !theme && sidebar,
                border: !theme && "none" }}>
                <div className="profile-photo-box"></div>
                <div className="name-plate" style={{ color: !theme && "white" }}>
                    <span className="name-plate-highlight" style={{ color: !theme && "yellow" }} >GIO</span>
                    MAR<br />C.<br /> MUNGCAL<br />
                    <span className="e-mail">gcmungcal@gmail.com</span>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Sidebar
