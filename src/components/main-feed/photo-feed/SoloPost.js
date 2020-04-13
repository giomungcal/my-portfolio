import React, { useContext } from 'react'
import { PhotoPostContext } from '../../../contexts/PhotoPostContext'

const SoloPost = () => {
    const { photoPosts, handlePostHide, postClick, postIndex } = useContext(PhotoPostContext);
    
    console.log(postIndex);

    return (
        <div style={{ display: !postClick && "none" }} className="post-modal-container" onClick={handlePostHide}>
            <div className="photo-modal-container">
                <div className="photo-modal-box" ><img src={photoPosts[postIndex].url} alt="photopost" /></div>
            </div>
        </div>
    )
}

export default SoloPost
