import React from 'react'
import './feed.css'
import Header from './Header'
import HeaderButtons from './HeaderButtons'
import PhotoGrid from './photo-feed/PhotoGrid'

const Feed = () => {
    return (
        <div className="main-feed">
            <Header />
            <HeaderButtons />
            <PhotoGrid />
        </div>
    )
}

export default Feed
