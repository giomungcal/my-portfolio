import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './navbar/Navbar'
import Feed from './main-feed/Feed'
import Sidebar from './sidebar/Sidebar'
import About from './main-feed/About'
import PhotoPostContextProvider from '../contexts/PhotoPostContext'
import Hearts from './main-feed/Hearts'

const Main = () => {
    return (
        <Router>
            <Navbar />
            <main>
            <Sidebar />
            <PhotoPostContextProvider>
                <div className="main-container">
                    <Switch>
                        <Route path="/" exact component={Feed} />
                        <Route path="/about" component={About} />
                        <Route path="/hearts" component={Hearts} />
                    </Switch>
                </div>
            </PhotoPostContextProvider>
            </main>
        </Router>
    )
}

export default Main
