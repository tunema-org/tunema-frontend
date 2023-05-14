//for landing page navigation button
import React from 'react'

interface props {
  children: string
}

const ButtonLanding = ({ children }: props) => {
  return (
    <button className="bg-primary-green hover:bg-dark-green font-bold py-2 px-6 rounded-lg">
      {children}
    </button>
  )
}

export default ButtonLanding
