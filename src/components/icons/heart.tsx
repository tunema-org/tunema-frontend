import * as React from 'react'
const SvgComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.5}
      d="M7.6 1C3.955 1 1 4.157 1 8.05 1 15.1 8.8 21.51 13 23c4.2-1.49 12-7.9 12-14.95C25 4.156 22.045 1 18.4 1c-2.232 0-4.206 1.184-5.4 2.996a6.747 6.747 0 0 0-2.357-2.204A6.256 6.256 0 0 0 7.6 1Z"
    />
  </svg>
)
export default SvgComponent
