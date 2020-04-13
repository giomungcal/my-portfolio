import React, { useState, useEffect, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'

import feedInfo from './FeedPosts.json'

export const PhotoPostContext = createContext();

const PhotoPostContextProvider = ( props ) => {

    const [ photoPosts, setPhotoPosts ] = useState([{ heart: false }])
    const [ postClick, setPostClick ] = useState(false);
    const [ postIndex, setPostIndex ] = useState(0);

    const handlePostShow = (index) => {
        setPostClick(!postClick);
        setPostIndex(index);
    }

    const handlePostHide = () => {
        setPostClick(!postClick);
    }

    const handleHeart = (idNum, index) => {
        // THIS IS FRUSTRATING took me some time to figure out cloning multi dimensional arrays

        const dupeArray = JSON.parse(JSON.stringify(photoPosts));
        const postIndex = dupeArray.findIndex( ({ id }) => id === idNum );
        const replacePost = dupeArray[postIndex];

        replacePost.heart = !replacePost.heart;
        dupeArray.splice( postIndex, 1, replacePost );
        
        setPhotoPosts(dupeArray);

    }

    useEffect(() => {
        const feedWithId = feedInfo.map((feed) => ({ ...feed, id: uuidv4() }));
        setPhotoPosts(feedWithId);
    }, [])

    // console.log(photoPosts);

    return (
        <PhotoPostContext.Provider value={{ photoPosts, handlePostShow, handleHeart, handlePostHide, postClick, postIndex }} >
            { props.children }
        </PhotoPostContext.Provider>
    )
}

export default PhotoPostContextProvider
