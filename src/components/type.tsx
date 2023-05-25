import React from 'react'
import { useState, useRef } from 'react'

interface props {
  children: string
}

const Type = ({ children }: props) => {
  const typeVariant = {
    primary: 'border-black bg-none',
    clicked: 'border-dark-green bg-light-green',
  }

  return (
    <>
      <button className="border border-black bg-none rounded-[10px] w-auto py-1 px-3 hover:bg-light-green hover:border-dark-green">
        {children}
      </button>
    </>
  )
}

export default Type
