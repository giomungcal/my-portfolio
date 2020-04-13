import React from 'react'
import {BrowserRouter as Router} from "react-router-dom";

import ThemeContextProvider from './contexts/ThemeContext'
import Main from './components/Main';

const App = () => {
  return (
    <Router>
      <ThemeContextProvider>
        <Main />
      </ThemeContextProvider>
    </Router>
  )
}

export default App
