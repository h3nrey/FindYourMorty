import axios from 'axios';
import { useEffect, useState } from 'react'

//Phosphor
import { ArrowLeft, ArrowRight, Check, Funnel } from 'phosphor-react'

//radix
import * as Popover from '@radix-ui/react-popover';
import * as Checkbox from '@radix-ui/react-checkbox';

import { filterSearch } from './searchFilter';
import { CharacterGrid } from './components/CharactersGrid';
const apiUrl = "https://rickandmortyapi.com/api/character"

function App() {
  const [apiData, setApiData] = useState([]);
  const [apiDataResults, setApiDataResults] = useState([]);
  const [characters, setCharacters] = useState([]);

  //search
  const [searchText, setSearchText] = useState("");

  //pagination
  const [page, setPage] = useState(1)

  //filters
  const [searchFilters, setSearchFilters] = useState([
    {
      prop: "",
      value: ""
    }
  ])

  
  function handleSetPage(amount) {
    if(page > 0 && page < apiData.info.count) {
      setPage(page + amount)
    }
  }
  useEffect(() => {
    axios.get(`${apiUrl}?page=${page}`).then(res => {
      setApiData(res.data);
      setApiDataResults(res.data.results)
      setCharacters(res.data.results)
    })
  }, [page])

  useEffect(() => {
    if(apiDataResults) {
      // console.log("teste")
      setCharacters(filterSearch(searchText, false, true, apiDataResults, searchFilters))
    }
  }, [searchText, searchFilters])
  
  return (
    <div className="App px-6 xl:px-[8rem]">
      <h1 className='text-aqua font-title text-[2rem] mt-12 text-center px-10'>
        <span className='text-[2.25rem] capitalize'>f</span>ind Your <span className='text-[2.25rem] capitalize'>m</span>orty
      </h1>

      <div tittle="search__box" className='mt-8 flex md:block'>
        <input 
          type="text" 
          value={searchText}
          onChange={(ev) => setSearchText(ev.target.value)}
          className='bg-darkPurple w-full font-header py-4 px-6 rounded-lg text-[1.125rem]' 
          placeholder='Search a Character...'
        />
        <button className='bg-yellow p-5 rounded-r-md md:hidden'>
          <Funnel size={20} weight="fill" className="text-purpleBg"/>
        </button>
      </div>
      
      <div title='filters' className='mt-4'>
        <Popover.Root>
          <Popover.Trigger className='bg-aqua text-gray rounded-lg px-4 py-[0.75rem]'>
            species
          </Popover.Trigger>

          <Popover.Portal>
            <Popover.Content 
              align="start" 
              className="bg-darkPurple flex flex-col px-10 pl-6 py-6 gap-3 rounded-md">
              <div className='flex gap-4'>
                <button 
                className="p-1 w-6 bg-cream rounded-sm content-['']"
                onClick={() => setSearchFilters([{prop: "species", value: "human"}])}
                >  
                  { searchFilters.length > 0 && searchFilters[0].value == "human" && (
                      <Check weight='bold'></Check> 
                    )
                  }
                </button>
                <span className='text-aqua text-[1.125rem]'>human</span>
              </div>
              <div className='flex gap-4'>
                <button 
                  className="p-1 w-6 bg-cream rounded-sm content-['']"
                  onClick={() => setSearchFilters([{prop: "species", value: "alien"}])}
                >  
                  { searchFilters.length > 0 && searchFilters[0].value == "alien" && (
                      <Check weight='bold'></Check> 
                    )
                  }
                </button>
                <span className='text-aqua text-[1.125rem]'>Alien</span>
              </div>
              <div className='flex gap-4'>
                <button 
                  className="p-1 w-6 bg-cream rounded-sm content-['']"
                  onClick={() => setSearchFilters([{prop: "species", value: "humanoid"}])}
                >  
                  { searchFilters.length > 0 && searchFilters[0].value == "humanoid" && (
                      <Check weight='bold'></Check> 
                    )
                  }
                </button>
                <span className='text-aqua text-[1.125rem]'>Humanoid</span>
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
      
      {
        characters.length > 0 && (
          <CharacterGrid props={characters}/>

        )
      }

      <div className='flex gap-10 mt-8'>
        <button 
          className='bg-aqua p-2 rounded-md'
          onClick={() => handleSetPage(-1)}
        >
          <ArrowLeft size={24} /> 
        </button>
        <button 
          className='bg-aqua p-2 rounded-md'
          onClick={() => handleSetPage(1)}
        >
          <ArrowRight size={24} /> 
        </button>

      </div>

    </div>
  )
}

export default App
