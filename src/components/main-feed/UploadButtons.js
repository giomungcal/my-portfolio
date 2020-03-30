import React from 'react'

import todo_button from '../../imgs/buttons/my-portfolio_todo.png'
import photo_button from '../../imgs/buttons/my-portfolio_photo.png'

const UploadButtons = () => {
    return (
        <div className="buttons-container">
            <a><img className="upload-butt" src={photo_button} /></a>
            <a><img className="upload-butt" src={todo_button} /></a>
        </div>
    )
}

export default UploadButtons
