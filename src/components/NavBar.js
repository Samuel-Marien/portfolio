import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

const MyLink = (props) => {
  const { title, href } = props
  return (
    <a
      href={href}
      className="block mt-4 lg:inline-block lg:mt-0 text-slate-500 pr-16 mr-4 pb-1
      hover:text-slate-300 focus:text-red-600 hover:animate-pulse hover:scale-110 hover:font-bold
      transition-all duration-500"
    >
      {title}
    </a>
  )
}

MyLink.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string
}

const NavBar = () => {
  const [show, setShow] = useState(false)
  const [showButton, setShowButton] = useState(true)

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      {/* responsive button  */}
      {showButton && (
        <div className="block lg:hidden">
          <button
            onClick={() => setShow(true)}
            className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      )}

      {/* responsive navbar  */}
      <CSSTransition
        in={show}
        timeout={300}
        classNames="myNavbar"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        {show ? (
          <div className="w-full block lg:hidden ">
            <div className="text-sm lg:flex-grow ">
              <MyLink title="Home" href="/" />
              <MyLink title="About" href="/" />
              <MyLink title="Skills" href="/" />
              <MyLink title="Works" href="/" />
              <MyLink title="Contact" href="/" />
            </div>
          </div>
        ) : null}
      </CSSTransition>

      {/* desktop navbar  */}
      <div className="w-full hidden flex-grow lg:flex lg:items-center lg:w-auto ">
        <div className="text-sm lg:flex-grow">
          <MyLink title="Home" href="/" />
          <MyLink title="About" href="/" />
          <MyLink title="Skills" href="/" />
          <MyLink title="Works" href="/" />
          <MyLink title="Contact" href="/" />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
