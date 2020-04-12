import React, { useContext } from 'react'
import randomcolor from 'randomcolor'
import { PhotoPostContext } from '../../../contexts/PhotoPostContext'
import { ThemeContext } from '../../../contexts/ThemeContext'

const SoloPost = () => {
    const { photoPosts, handlePostHide, postClick, postIndex } = useContext(PhotoPostContext);
    const { theme, darkTheme } = useContext(ThemeContext);
    const { photopost } = darkTheme;

    return (
        <div style={{ display: !postClick && "none" }} className="post-modal-container" onClick={handlePostHide}>
            <div className="photo-modal-container">
                <div className="photo-modal-box" ><img src={photoPosts[postIndex].url} alt="photopost" /></div>
            </div>
        </div>
    )
}

export default SoloPost
