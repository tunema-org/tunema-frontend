import React, { useState } from 'react'

const IconPlus: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isHovered ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={22}
          height={22}
          fill="#9CB719"
        >
          <path
            fill="#9CB719"
            fillOpacity={1}
            d="M22 11a.917.917 0 0 1-.917.917h-9.166v9.166a.917.917 0 0 1-1.834 0v-9.166H.917a.917.917 0 0 1 0-1.834h9.166V.917a.917.917 0 0 1 1.834 0v9.166h9.166A.917.917 0 0 1 22 11Z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={22}
          height={22}
          fill="none"
        >
          <path
            fill="#000"
            fillOpacity={0.5}
            d="M22 11a.917.917 0 0 1-.917.917h-9.166v9.166a.917.917 0 0 1-1.834 0v-9.166H.917a.917.917 0 0 1 0-1.834h9.166V.917a.917.917 0 0 1 1.834 0v9.166h9.166A.917.917 0 0 1 22 11Z"
          />
        </svg>
      )}
    </div>
  )
}

export default IconPlus
