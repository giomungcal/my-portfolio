import React, { useState, useEffect, createContext } from 'react'

export const ThemeContext = createContext();

const ThemeContextProvider = ( props ) => {

    

    const [ theme, setTheme ] = useState(true);

    useEffect(() => {
        const time = new Date().getHours();

        if( time > 18 || time < 6 ) {
            setTheme(false);
            document.documentElement.style.backgroundColor = "#141d26";
        }else{
            setTheme(true);
            document.documentElement.style.backgroundColor = "white";
        }
    }, [ ])
    

    const darkTheme = {
        navbar: "#243447",
        sidebar: "#c21f5c",
        photopost: "#637891"
    }

    const changeTheme = () => {
        setTheme(!theme);
        theme ? ( document.documentElement.style.backgroundColor = "#141d26") : ( document.documentElement.style.backgroundColor = "white");
    } 

    return (
        <ThemeContext.Provider value={{ theme, changeTheme, darkTheme }} >
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
