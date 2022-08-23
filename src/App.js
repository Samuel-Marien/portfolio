import React from 'react'
import './App.css'

import NavBar from './components/NavBar'
import FastPrez from './components/FastPrez'
import ScrollButton from './components/ScrollButton'
import About from './components/About'

function App() {
  return (
    <div
      className="test"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '1800px',
        backgroundImage: 'url(images/bgHome.png)'
      }}
    >
      <NavBar />
      <div className="h-screen border border-red-500">
        <div className="flex flex-col mt-5 ml-5 md:mt-56 md:ml-48">
          <FastPrez />
          <div className="absolute bottom-5 left-5 md:left-48">
            <ScrollButton mode="Down" href="#about" />
          </div>
        </div>
      </div>
      <div className="h-screen border border-blue-500">
        <div className="p-2 md:p-0 ml-0 md:ml-48" id="about">
          <About />
          {/* <div className="relative">
            <div className="absolute bottom-0 md:-bottom-20 " style={{}}>
              <ScrollButton mode="Down" href="#about" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default App
