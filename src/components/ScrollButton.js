import React from 'react'

import { BsArrowDownCircle } from 'react-icons/bs'

const ScrollButton = () => {
  return (
    <a className="flex items-center text-slate-500 animate-bounce">
      <BsArrowDownCircle />
      <span className="ml-3">Scroll</span>
    </a>
  )
}

export default ScrollButton
