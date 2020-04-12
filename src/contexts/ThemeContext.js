import React, { useState, useEffect, createContext } from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = ( props ) => {

    const time = new Date().getHours();

    const [ theme, setTheme ] = useState(true);

    useEffect(() => {
        if( time > 18 || time < 6 ) {
            setTheme(false);
        }else{
            setTheme(true);
        }
    }, [])
    

    const darkTheme = {
        background: "#141d26",
        navbar: "#243447",
        sidebar: "#c21f5c",
        photopost: "#637891"
    }

    const changeTheme = () => {
        setTheme(!theme);
    } 

    return (
        <ThemeContext.Provider value={{ theme, changeTheme, darkTheme }} >
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
