import React from 'react'
import './feed.css'
import Header from './Header'
import UploadButtons from './UploadButtons'
import PhotoGrid from './photo-feed/PhotoGrid'

const Feed = () => {
    return (
        <div className="main-container">
            <div className="main-feed">
                <Header />
                <UploadButtons />
                <PhotoGrid />
            </div>
        </div>

    )
}

export default Feed