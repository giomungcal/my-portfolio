import React, { useContext } from 'react'

import { PhotoPostContext } from '../../../contexts/PhotoPostContext'

const SoloPost = () => {
    const { photoPosts, handlePostShow, postIndex } = useContext(PhotoPostContext);

    return (
        <React.Fragment>
            <div className="post-modal-container" onClick={handlePostShow} >
                    <div className="photo-modal-container">
                        <div className="photo-modal-box"  ><img src={photoPosts[postIndex].url} alt="photopost" /></div>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default SoloPost
