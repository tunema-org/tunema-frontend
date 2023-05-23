import * as React from 'react'

type IconHomeProps = {
  isActive: boolean
}

const IconHomeActive = (props: any) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.51663 2.36664L3.02496 5.86664C2.27496 6.44997 1.66663 7.69164 1.66663 8.63331V14.8083C1.66663 16.7416 3.24163 18.325 5.17496 18.325H14.825C16.7583 18.325 18.3333 16.7416 18.3333 14.8166V8.74997C18.3333 7.74164 17.6583 6.44997 16.8333 5.87497L11.6833 2.26664C10.5166 1.44997 8.64163 1.49164 7.51663 2.36664Z"
      stroke="#9CB719"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      opacity="0.34"
      d="M10 14.9917V12.4917"
      stroke="#9CB719"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

const IconHomeInactive = (props: any) => (
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

const IconHome = (props: IconHomeProps) =>
  props.isActive ? <IconHomeActive /> : <IconHomeInactive />

export default IconHome
