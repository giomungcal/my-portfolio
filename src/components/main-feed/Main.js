import React from 'react'
import './main.css'
import Header from './Header'
import UploadButtons from './UploadButtons'

const Main = () => {
    return (
        <div className="main-container">
            <div className="main-feed">
                <Header />
                <UploadButtons />
            </div>
        </div>

    )
}

export default Main
