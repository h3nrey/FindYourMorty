import { ArrowUp } from "phosphor-react";
import { useState } from "react";

export function ScrollupButton() {
  const [pageScroll, setPageScroll] = useState(0);

  window.addEventListener("scroll", () => {
    setPageScroll(window.scrollY)
  })

  return(
    <>
      {pageScroll > 10 && (
        <button 
        onClick={() => window.scroll({top: 0, behavior: 'smooth'  })}
        className='fixed bottom-6 right-10 bg-yellow p-2 rounded-lg text-darkPurple animate-shake'>
          <ArrowUp size={24}/>
      </button>
      )}
    </>
  )
}