// All credit goes to https://github.com/davidhu2000/react-spinners
// This is copied from the react-spinners package directly

import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from 'react'

interface CommonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  color?: string
  loading?: boolean
  cssOverride?: CSSProperties
  speedMultiplier?: number
}
export type LengthType = number | string
export interface LoaderSizeMarginProps extends CommonProps {
  size?: LengthType
  margin?: LengthType
}

export function cssValue(value: number | string): string {
  const lengthWithunit = parseLengthAndUnit(value)

  return `${lengthWithunit.value}${lengthWithunit.unit}`
}

export const createAnimation = (
  loaderName: string,
  frames: string,
  suffix: string,
): string => {
  const animationName = `react-spinners-${loaderName}-${suffix}`

  if (typeof window == 'undefined' || !window.document) {
    return animationName
  }

  const styleEl = document.createElement('style')
  document.head.appendChild(styleEl)
  const styleSheet = styleEl.sheet

  const keyFrames = `
      @keyframes ${animationName} {
        ${frames}
      }
    `

  if (styleSheet) {
    styleSheet.insertRule(keyFrames, 0)
  }

  return animationName
}
const cssUnit: { [unit: string]: boolean } = {
  cm: true,
  mm: true,
  in: true,
  px: true,
  pt: true,
  pc: true,
  em: true,
  ex: true,
  ch: true,
  rem: true,
  vw: true,
  vh: true,
  vmin: true,
  vmax: true,
  '%': true,
}
interface LengthObject {
  value: number
  unit: string
}
export function parseLengthAndUnit(size: number | string): LengthObject {
  if (typeof size === 'number') {
    return {
      value: size,
      unit: 'px',
    }
  }
  let value: number
  const valueString: string = (size.match(/^[0-9.]*/) || '').toString()
  if (valueString.includes('.')) {
    value = parseFloat(valueString)
  } else {
    value = parseInt(valueString, 10)
  }

  const unit: string = (size.match(/[^0-9]*$/) || '').toString()

  if (cssUnit[unit]) {
    return {
      value,
      unit,
    }
  }

  console.warn(
    `React Spinners: ${size} is not a valid css value. Defaulting to ${value}px.`,
  )

  return {
    value,
    unit: 'px',
  }
}

const sync = createAnimation(
  'LoadingIndicator',
  `33% {transform: translateY(10px)}
    66% {transform: translateY(-10px)}
    100% {transform: translateY(0)}`,
  'sync',
)

function LoadingIndicator({
  loading = true,
  color = '#000000',
  speedMultiplier = 1,
  cssOverride = {},
  size = 15,
  margin = 2,
  ...additionalprops
}: LoaderSizeMarginProps): JSX.Element | null {
  const wrapper: React.CSSProperties = {
    display: 'inherit',
    ...cssOverride,
  }

  const style = (i: number): React.CSSProperties => {
    return {
      backgroundColor: color,
      width: cssValue(size),
      height: cssValue(size),
      margin: cssValue(margin),
      borderRadius: '100%',
      display: 'inline-block',
      animation: `${sync} ${0.6 / speedMultiplier}s ${
        i * 0.07
      }s infinite ease-in-out`,
      animationFillMode: 'both',
    }
  }

  if (!loading) {
    return null
  }

  return (
    <span style={wrapper} {...additionalprops}>
      <span style={style(1)} />
      <span style={style(2)} />
      <span style={style(3)} />
    </span>
  )
}

export default LoadingIndicator
