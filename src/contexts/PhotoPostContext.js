import React, { useState, useEffect, createContext } from 'react'
import feedInfo from './FeedPosts.json'

export const PhotoPostContext = createContext();

const PhotoPostContextProvider = ( props ) => {

    const [ photoPosts, setPhotoPosts ] = useState([{}])
    const [ postClick, setPostClick ] = useState(false);
    const [ postIndex, setPostIndex ] = useState(0);

    const handlePostShow = (index) => {
        setPostClick(!postClick);
        setPostIndex(index);
    }

    const handlePostHide = (index) => {
        setPostClick(!postClick);
    }

    const handleHeart = () => {
        const newPosts = [ ...photoPosts ]
 
        console.log(newPosts)
    }

    useEffect(() => {
        setPhotoPosts(feedInfo);
    }, [])

    // console.log(photoPosts);

    return (
        <PhotoPostContext.Provider value={{ photoPosts, handlePostShow, handleHeart, handlePostHide, postClick, postIndex }} >
            { props.children }
        </PhotoPostContext.Provider>
    )
}

export default PhotoPostContextProvider
