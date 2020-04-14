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
                    <span className="e-mail">gcmungcal@gmail.com</span><br />
                    <p className="name-plate-desc">displayed on this website are some of my interests, inspirations, and weird stuff.</p>
                    <p className="name-plate-desc name-plate-desc-2">i'm supposedly graduating on june, but right now, i don't know if i'll still be graduating because of the crisis :)</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
