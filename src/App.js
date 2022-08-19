import React from 'react'
import './App.css'

import NavBar from './components/NavBar'

function App() {
  return (
    <div
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '2500px',
        backgroundImage: 'url(images/bgHome.png)'
      }}
    >
      <NavBar />
    </div>
  )
}

export default App
