import * as React from 'react'
const SvgComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.517 2.367-4.492 3.5c-.75.583-1.358 1.825-1.358 2.766v6.175a3.521 3.521 0 0 0 3.508 3.517h9.65a3.52 3.52 0 0 0 3.508-3.508V8.75c0-1.008-.675-2.3-1.5-2.875l-5.15-3.608c-1.166-.817-3.041-.775-4.166.1Z"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 14.992v-2.5"
      opacity={0.34}
    />
  </svg>
)
export default SvgComponent
