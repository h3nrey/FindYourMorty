import { CaretDoubleLeft, CaretDoubleRight } from "phosphor-react";

export function PagesButton({pages, actualPage, setActualPage}){
  let pagesButton = [];
  
  for (let i = 1; i <= pages; i++) {
    if((i <= actualPage + 2 && i >= actualPage - 2) || (i <= 5 && actualPage < 4) || (i >= pages - 4 && actualPage >= pages -2)) {
      pagesButton.push(
        <button 
          key={`page${i}`}
          className='p-3 px-4 bg-darkPurple text-gray rounded-md outline outline-aqua outline-0 hover:outline-4 transition-all'
          onClick={() => setActualPage(i)}
          style={{backgroundColor: actualPage != i ? '#241A2E' : "#16BD91"}}
        > 
        {i}
        </button>
      )
    }
  }

  return(
    <div className='flex gap-2 mt-8 w-full'> 
    <button 
      onClick={() => setActualPage(1)}
      className='hidden md:block bg-aqua p-2 text-gray rounded-md 
      outline outline-aqua outline-0 hover:outline-4 hover:bg-darkPurple transition-all'>
      <CaretDoubleLeft size={24} className='text-gray'/>
    </button>


    {pagesButton}

    <button 
      onClick={() => {
        setActualPage(pages)
      }}
      className='hidden md:block bg-aqua p-2 text-gray rounded-md 
      outline outline-aqua outline-0 hover:outline-4 hover:bg-darkPurple transition-all'>
      <CaretDoubleRight size={24} className='text-gray'/>
    </button>
  </div>
  )
}