import { Funnel, X } from "phosphor-react";
import { useState } from "react";
import useDebounce from "../useDebounce";

export function SearchBox({value, onChange}) {

  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 500);

  function handleOnChange(event) {
    const text = event.target.value;
    setDisplayValue(text)
    debouncedChange(text);
  }
  return (
    <div tittle="search__box" className='mt-8 group overflow-hidden'>
        <div className="relative">
          <input 
            type="text" 
            value={displayValue}
            onChange={handleOnChange}
            className="search__input bg-darkPurple w-full font-header py-4 px-6 rounded-lg lg:rounded-2xl text-[1.125rem] lg:text-[2rem] text-gray outline-none"
            placeholder='Search a Character...'
          />
          <span 
          className="bg-aqua w-0 left-0 h-2 xl:h-4 content-[''] absolute bottom-0 rounded-lg transition-all">
          </span>
          {
            displayValue && (
              <button onClick={() => {
                setDisplayValue("")
                onChange("")
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[80%] group">
                 <X weight="bold" size="10%" className="text-aqua group-hover:animate-scale"/> 
              </button>

            )
          }

        </div>
      </div>
  )
}