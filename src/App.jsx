import axios from 'axios';
import { useEffect, useState } from 'react'
import portalImg from "./assets/Portal.png"

//Phosphor
import { ArrowLeft, ArrowRight} from 'phosphor-react'

import { filterSearch } from './searchFilter';
import { CharacterGrid } from './components/CharactersGrid';
import { FilterPopover } from './components/FilterPopover';
import { SearchBox } from './components/SearchBox';
import { data } from 'autoprefixer';

const apiUrl = "https://rickandmortyapi.com/api/character"

function App() {
  const [apiData, setApiData] = useState([]);

  //search
  const [searchText, setSearchText] = useState("");

  //pagination
  const [page, setPage] = useState(1)

  //filters
  const [searchFilters, setSearchFilters] = useState([])

  
  function handleSetPage(amount) {
    if(page > 0 && page < apiData.info.count) {
      setPage(page + amount)
    }
  }
  useEffect(() => {
    setApiData([])
    axios.get(`${apiUrl}?page=${page}&name=${searchText}`).then(res => {
      setApiData(res.data);
    })
  }, [page, searchText])
  
  return (
    <div className="App px-6 xl:px-[8rem]">
      <h1 className='text-aqua font-title text-[2rem] mt-12 text-center px-10'>
        <span className='text-[2.25rem] capitalize'>f</span>ind Your <span className='text-[2.25rem] capitalize'>m</span>orty
      </h1>

      <SearchBox value={searchText} onChange={setSearchText}/>
      
      <div title='filters' className='flex gap-6 mt-4'>

        <FilterPopover 
          filtersSearch={searchFilters} 
          setSearchFilters={setSearchFilters} 
          filterProp = {"species"}
          tags={[{title: "human"}, {title: "alien"}, {title: "humanoid"}, {title:"mythological creature"}]}
        />
        <FilterPopover 
          filtersSearch={searchFilters} 
          setSearchFilters={setSearchFilters} 
          filterProp = {"status"}
          tags={[{title: "dead"}, {title: "alive"}, {title: "unkown"}]}
        />
        {
          searchFilters.map(filter => {
            return(
              <p>{filter}</p>
            )
          })
        }
      </div>
      
      {searchText && apiData.length == 0 && (
        <div className='w-full py-20 flex items-center justify-center'>
          <img src={portalImg} alt="loading" className='loading animate-spin rounded-full'/>
        </div>
        )
      }

      {
        apiData.results && (
          <CharacterGrid props={apiData.results}/>

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
