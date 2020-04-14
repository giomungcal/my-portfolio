import React, { useContext } from 'react'
import './hearts.css'
import randomcolor from 'randomcolor'
import { PhotoPostContext } from '../../contexts/PhotoPostContext'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../contexts/ThemeContext';
import SoloPost from './photo-feed/SoloPost';

import return_button from '../../imgs/buttons/my-portfolio_return.png'

const Hearts = () => {
    const { photoPosts, postClick, handleHeart,  handlePostShow} = useContext(PhotoPostContext);
    const { theme, darkTheme } = useContext(ThemeContext);
    const { photopost } = darkTheme;

    return (
        <div className="hearts-page">
            {photoPosts.find(f => (f.heart === true)) ? <h1>hearted posts ♥ </h1> : <h1>no hearted posts :&lt; </h1>}
            <Link to="/" exact><img className="link-butt" src={return_button} alt="Button_Photo" /></Link>
            
            { postClick && <SoloPost /> }
            <div className="photo-grid">
            { photoPosts.filter(photo => photo.heart === true).map(( photo, index ) => (
                <div key={index} className="photo-container" style={{ backgroundColor: !theme && photopost, border: !theme && 'none' }}>
                    <div className="photo-box photo-box--quick-zoom" onClick={() => handlePostShow(photo.id)} ><img src={photo.url} alt="photopost" /></div>
                    <div className="photo-header">
                        <p className="photo-title" style={{color: theme ? randomcolor() : "#baf257"}}>{photo.title} </p>
                        <input className="heart-btn" id="heart" type="checkbox" checked={photo.heart} onChange={() => handleHeart(photo.id, index)} /><label htmlFor="heart">❤</label>                        
                    </div>
                    <p className="photo-desc" style={{ color: !theme && "white" }}>{photo.desc} </p>
                </div>
                ))
            }
            </div>
        </div>
    )
}

export default Hearts
