import React from 'react'
import Navbar from './components/navbar/Navbar'
import Main from './components/main-feed/Main'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Sidebar />
        <Main />
      </main>
    </React.Fragment>
  )
}

export default App
