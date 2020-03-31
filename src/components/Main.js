import React, { useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './navbar/Navbar'
import Feed from './main-feed/Feed'
import Sidebar from './sidebar/Sidebar'
import About from './about/About'
import PhotoPostContextProvider from '../contexts/PhotoPostContext'
import { ThemeContext } from '../contexts/ThemeContext'

const Main = () => {
    const { theme, darkTheme } = useContext(ThemeContext);
    const { background } = darkTheme;

    return (
        <div className="dark-background" style={{ backgroundColor: !theme && background, height: "" }} >
            <Router>
                <Navbar />
                <main>
                <Sidebar />
                <PhotoPostContextProvider>
                    <Switch>
                        <Route path="/" exact component={Feed} />
                        <Route path="/about" component={About} />
                    </Switch>
                </PhotoPostContextProvider>
                </main>
            </Router>
        </div>
    )
}

export default Main
