//for footer navigation
import React from 'react'

interface props {
  children: string
}

const ButtonPrimary = ({ children }: props) => {
  return (
    <button className="bg-primary-green hover:bg-dark-green font-bold py-3 px-8 rounded-full">
      {children}
    </button>
  )
}

export default ButtonPrimary
