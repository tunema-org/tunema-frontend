//for footer navigation
import React from 'react'

interface props {
  children: string
  type: 'primary' | 'landing'
}

const Button = ({ children, type }: props) => {
  const buttonVariant = {
    primary:
      'duration-200 bg-primary-green hover:bg-dark-green font-bold py-3 px-8 rounded-full overflow-clip',
    landing:
      'duration-200 bg-primary-green hover:bg-dark-green font-bold py-2 px-6 rounded-lg overflow-clip',
  }

  return <button className={buttonVariant[type]}>{children}</button>
}

export default Button
