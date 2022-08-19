import React from 'react'
import './App.css'

import NavBar from './components/NavBar'
import FastPrez from './components/FastPrez'

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
      <FastPrez />
    </div>
  )
}

export default App
