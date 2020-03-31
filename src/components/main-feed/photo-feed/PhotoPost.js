import React, { useContext } from 'react'
import randomcolor from 'randomcolor'
import { PhotoPostContext } from '../../../contexts/PhotoPostContext'
import { ThemeContext } from '../../../contexts/ThemeContext';

const PhotoPost = () => {
    const { photoPosts } = useContext(PhotoPostContext);
    const { theme, darkTheme } = useContext(ThemeContext);
    const { photopost } = darkTheme;

    return (
        <React.Fragment>
            { photoPosts.map(( photo, index ) => (
                <div key={index} className="photo-container" style={{ backgroundColor: !theme && photopost, border: !theme && 'none' }}>
                    <div className="photo-box" ><img src={photo.img} alt="photopost" /></div>
                    <p className="photo-title" style={{color: theme ? randomcolor() : "#baf257"}} >{photo.name}</p>
                    <p className="photo-desc" style={{ color: !theme && "white" }}>Feelin good feelin' better Feelin bad fee lin'fedf fFeeli n good feelin' better Feelin bad feelddd0                            
                    </p>
                </div>
                ))
            }
        </React.Fragment>
    )
}

export default PhotoPost
