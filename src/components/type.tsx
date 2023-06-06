import React from 'react'
import { useState, useRef } from 'react'

type TypeText = {
  children: string
}

const Type = (props: TypeText) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <>
      <button
        className={`border border-black bg-none rounded-[10px] w-auto py-1 px-3 hover:bg-light-green hover:border-dark-green ${
          isClicked
            ? 'transition ease-out duration-150 border-dark-green bg-light-green'
            : 'transition ease-out duration-150 border-black bg-none'
        }`}
        onClick={handleClick}
      >
        {props.children}
      </button>
    </>
  )
}

export default Type

// import React, { useState } from 'react';

// const ToggleButton = () => {
//   const [isClicked, setIsClicked] = useState(false);

//   const handleClick = () => {
//     setIsClicked(!isClicked);
//   };

//   return (
//     <button
//       className={`px-4 py-2 rounded ${
//         isClicked ? 'bg-red-500 text-white' : 'bg-blue-500 text-black'
//       }`}
//       onClick={handleClick}
//     >
//       Click Me
//     </button>
//   );
// };

// export default ToggleButton;
