import React, { useState, useEffect, createContext } from 'react'

export const PhotoPostContext = createContext();

const PhotoPostContextProvider = ( props ) => {

    const [ photoPosts, setPhotoPosts ] = useState([{}])

    useEffect(() => {
        fetch('https://www.breakingbadapi.com/api/characters?limit=20')
            .then(res => res.json())
            .then(res => {
                setPhotoPosts(res)
            })
    }, [])

    return (
        <PhotoPostContext.Provider value={{ photoPosts }} >
            { props.children }
        </PhotoPostContext.Provider>
    )
}

export default PhotoPostContextProvider
