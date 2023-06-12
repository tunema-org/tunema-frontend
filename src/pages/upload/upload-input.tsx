import type { UseFormRegister } from 'react-hook-form'
import { UploadSampleFormData } from './upload'

type UploadInputProps = {
  register: UseFormRegister<UploadSampleFormData>
  name: keyof UploadSampleFormData
  label: string
}

export const UploadInput = ({ register, name, label }: UploadInputProps) => {
  return (
    <div className="flex flex-col w-auto gap-3 justify-center font-body">
      <label htmlFor="" className="font-medium">
        {label} <span className="text-red-400">*</span>
      </label>
      <div className="flex w-auto bg-[#ededea] border rounded-[7px] h-auto pl-3 items-center gap-3">
        <input
          type="text"
          className="h-[35px] w-full bg-transparent focus:outline-none font-body pr-5"
          {...register(name, { required: true })}
        />
      </div>
    </div>
  )
}
