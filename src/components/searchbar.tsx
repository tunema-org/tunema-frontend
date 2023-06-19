import { useState } from 'react'

type SearchBarProps = {
  onSubmit: (search: string) => void
  disabled: boolean
}

const SearchBar = ({ onSubmit, disabled }: SearchBarProps) => {
  const [search, setSearch] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(search)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex w-full bg-[#ededea] border rounded-[34px] h-auto pl-7 items-center gap-3">
          <svg
            width="23"
            height="22"
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.438 13.8365H15.3991L15.0309 13.4969C16.3642 12.0176 17.0969 10.1292 17.0955 8.1761C17.0955 6.55902 16.5942 4.97826 15.6549 3.63371C14.7157 2.28915 13.3807 1.2412 11.8188 0.622372C10.2569 0.00354258 8.53826 -0.158371 6.88016 0.157105C5.22206 0.472582 3.699 1.25128 2.50358 2.39473C1.30816 3.53818 0.494063 4.99502 0.164246 6.58102C-0.16557 8.16703 0.0037036 9.81097 0.650662 11.305C1.29762 12.7989 2.39321 14.0759 3.79887 14.9743C5.20454 15.8727 6.85716 16.3522 8.54774 16.3522C10.665 16.3522 12.6112 15.6101 14.1103 14.3774L14.4654 14.7296V15.7233L21.0406 22L23 20.1258L16.438 13.8365ZM8.54774 13.8365C5.2733 13.8365 2.63008 11.3082 2.63008 8.1761C2.63008 5.04403 5.2733 2.51573 8.54774 2.51573C11.8222 2.51573 14.4654 5.04403 14.4654 8.1761C14.4654 11.3082 11.8222 13.8365 8.54774 13.8365Z"
              fill="black"
              fill-opacity="0.4"
            />
          </svg>

          <svg
            width="1"
            height="27"
            viewBox="0 0 1 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="0.5"
              x2="0.500001"
              y2="26.5"
              stroke="black"
              stroke-opacity="0.4"
              stroke-linecap="round"
            />
          </svg>

          <input
            type="search"
            placeholder={disabled ? 'Loading...' : 'Search'}
            className={`w-full h-[46px] bg-transparent focus:outline-none font-body pr-5 ${
              disabled ? 'cursor-not-allowed' : 'cursor-text'
            }`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            disabled={disabled}
          />
        </div>
      </form>
    </>
  )
}

export default SearchBar
