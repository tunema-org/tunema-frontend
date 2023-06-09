import { useState } from 'react'

interface props {
  label: string
  type: 'required' | 'primary'
}

const Input = ({ label, type }: props) => {
  const [input, setInput] = useState('')

  function handleInput(e: any) {
    setInput(e.target.value)
    // console.log(e.target.value)
  }

  const Variant = {
    required: 'text-red-400',
    primary: 'hidden',
  }

  return (
    <div className="flex flex-col w-auto gap-3 justify-center font-body">
      <label htmlFor="" className="font-medium">
        {label}
        <span className={Variant[type]}> *</span>
      </label>
      <div className="flex w-auto bg-[#ededea] border rounded-[7px] h-auto pl-3 items-center gap-3">
        <input
          type="text"
          value={input}
          onChange={handleInput}
          className="h-[35px] w-full bg-transparent focus:outline-none font-body pr-5"
        />
      </div>
    </div>
  )
}

export default Input
