import React from 'react'

import { BsArrowDownCircle } from 'react-icons/bs'

const ScrollButton = () => {
  return (
    <div className="flex items-center text-slate-500 animate-bounce">
      <BsArrowDownCircle />
      <span className="ml-3">Scroll</span>
    </div>
  )
}

export default ScrollButton
