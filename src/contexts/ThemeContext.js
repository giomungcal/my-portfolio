import React, { useState, createContext } from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = ( props ) => {

    const [ theme, setTheme ] = useState(true);

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
