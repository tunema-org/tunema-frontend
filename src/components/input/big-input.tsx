import { useState } from 'react'

interface props {
  label: string
  type: 'required' | 'primary'
}

const BigInput = ({ label, type }: props) => {
  const Variant = {
    required: 'text-red-400',
    primary: 'hidden',
  }

  const [input, setInput] = useState('')

  function handleInput(e: any) {
    setInput(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className="flex flex-col w-auto gap-3 justify-center font-body">
      <label htmlFor="" className="font-medium">
        {label}
        <span className={Variant[type]}> *</span>
      </label>
      <div className="flex w-auto bg-[#ededea] border rounded-[7px] h-auto pl-3 items-center gap-3">
        <textarea
          rows={4}
          cols={40}
          className="w-full bg-transparent focus:outline-none font-body pr-5 py-3"
          onChange={handleInput}
        />
      </div>
    </div>
  )
}

export default BigInput
