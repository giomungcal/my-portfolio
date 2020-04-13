import React, { useContext } from 'react'
import randomcolor from 'randomcolor'
import { PhotoPostContext } from '../../../contexts/PhotoPostContext'
import { ThemeContext } from '../../../contexts/ThemeContext';
import SoloPost from './SoloPost';

const PhotoPost = () => {
    const { photoPosts, handleHeart,  handlePostShow } = useContext(PhotoPostContext);
    const { theme, darkTheme } = useContext(ThemeContext);
    const { photopost } = darkTheme;

    return (
        <React.Fragment>
            <SoloPost />
            { photoPosts.map(( photo, index ) => (
                <div key={index} className="photo-container" style={{ backgroundColor: !theme && photopost, border: !theme && 'none' }}>
                    <div className="photo-box photo-box--quick-zoom" onClick={() => handlePostShow(index)} ><img src={photo.url} alt="photopost" /></div>
                    <div className="photo-header">
                        <p className="photo-title" style={{color: theme ? randomcolor() : "#baf257"}}  >{photo.title} </p>
                        <input className="heart-btn" id="heart" type="checkbox" checked={photo.heart} onChange={() => handleHeart(photo.id, index)} /><label htmlFor="heart">❤</label>
                    </div>
                    <p className="photo-desc" style={{ color: !theme && "white" }}>{photo.desc} </p>
                </div>
                ))
            }
        </React.Fragment>
    )
}

export default PhotoPost
