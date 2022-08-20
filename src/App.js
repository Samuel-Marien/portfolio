import React from 'react'
import './App.css'

import NavBar from './components/NavBar'
import FastPrez from './components/FastPrez'
import ScrollButton from './components/ScrollButton'

function App() {
  return (
    <div
      className="test "
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '1600px',
        backgroundImage: 'url(images/bgHome.png)'
      }}
    >
      <NavBar />
      <div className="flex flex-col mt-5 ml-5 md:mt-56 md:ml-48">
        <FastPrez />
        <div className="absolute bottom-5 left-5 md:left-48">
          <ScrollButton />
        </div>
      </div>
    </div>
  )
}

export default App
