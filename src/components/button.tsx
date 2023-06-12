//for footer navigation

interface props {
  children: string
  type: 'primary' | 'landing'
  submit?: boolean
}

const Button = ({ children, type, submit }: props) => {
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
