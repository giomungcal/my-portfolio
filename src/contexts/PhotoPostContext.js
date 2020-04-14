import React, { useState, useEffect, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'

import feedInfo from './FeedPosts.json'

export const PhotoPostContext = createContext();

const PhotoPostContextProvider = ( props ) => {

    const [ photoPosts, setPhotoPosts ] = useState([{ heart: false }])
    const [ postClick, setPostClick ] = useState(false);
    const [ postIndex, setPostIndex ] = useState(0);

    const handlePostShow = (idNum) => {
        setPostClick(!postClick);
        const postIndex = photoPosts.findIndex( ({ id }) => id === idNum );
        setPostIndex(postIndex);
    }

    const handlePostHide = () => {
        setPostClick(!postClick);
    }

    const handleHeart = (idNum, index) => {
        // Took me some time to figure out how to make a clone for multi-dimensional arrays.

        const dupeArray = JSON.parse(JSON.stringify(photoPosts));
        const postIndex = dupeArray.findIndex( ({ id }) => id === idNum );
        const replacePost = dupeArray[postIndex];

        replacePost.heart = !replacePost.heart;
        dupeArray.splice( postIndex, 1, replacePost );
        
        setPhotoPosts(dupeArray);

    }

    useEffect(() => {
        const feedWithId = feedInfo.map((feed) => ({ ...feed, heart: false, id: uuidv4() }));
        setPhotoPosts(feedWithId);
    }, [])

    // console.log(photoPosts);

    return (
        <PhotoPostContext.Provider value={{ photoPosts, handlePostShow, handlePostHide, handleHeart, postClick, postIndex }} >
            { props.children }
        </PhotoPostContext.Provider>
    )
}

export default PhotoPostContextProvider
