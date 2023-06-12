import { ReactNode } from 'react'
type ButtonProps = {
  children: ReactNode
  type: 'primary' | 'landing'
  submit?: boolean
}

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  type,
  submit,
}) => {
  const buttonVariant = {
    primary:
      'duration-200 bg-primary-green hover:bg-dark-green font-bold py-3 px-8 rounded-full overflow-clip',
    landing:
      'duration-200 bg-primary-green hover:bg-dark-green font-bold py-2 px-6 rounded-lg overflow-clip',
  }

  return (
    <button className={buttonVariant[type]} type={submit ? 'submit' : 'button'}>
      {children}
    </button>
  )
}

export default Button
