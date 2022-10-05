import axios from 'axios';
import { useEffect, useState } from 'react'
import portalImg from "./assets/Portal.png"

//Phosphor
import { ArrowLeft, ArrowRight, CaretDoubleLeft, CaretDoubleRight} from 'phosphor-react'

import { filterSearch } from './searchFilter';
import { CharacterGrid } from './components/CharactersGrid';
import { FilterPopover } from './components/FilterPopover';
import { SearchBox } from './components/SearchBox';import { PagesButton } from './components/PagesButton';
import { Footer } from './components/Footer';
;

const apiUrl = "https://rickandmortyapi.com/api/character"

function App() {
  const [apiData, setApiData] = useState([]);

  //search
  const [searchText, setSearchText] = useState("");

  //pagination
  const [actualPage, setActualPage] = useState(1)
  const [pages, setPages] = useState([])

  //filters
  const [characterStatus, setCharacterStatus] = useState("")
  const [characterSpecie, setCharacterSpecie] = useState("")
  const [loading, setLoading] = useState(false);

  function setSearchFilters (prop, value){
    switch (prop) {
      case "species":
        setCharacterSpecie(value);
        break;
        
        case "status":
          setCharacterStatus(value);
          break;
    }
    setActualPage(1);
  }
  
  function handleSetPage(amount) {
    if(actualPage > 0 && actualPage < apiData.info.count) {
      setActualPage(actualPage + amount)
    }
  }

  useEffect(() => {
    setLoading(true)
    setApiData([])
    axios.get(`${apiUrl}?page=${actualPage}&name=${searchText}&status=${characterStatus}&species=${characterSpecie}`)
    .then(res => {
      setApiData(res.data);
      setLoading(false);
      setPages(res.data.info.pages)
    })
    .catch((error) => {
      console.error(error)
      setLoading(false);
      setApiData(["error"])
      setActualPage(0)
    })
  }, [actualPage, searchText, characterStatus, characterSpecie])
  
  return (
    <div className="App px-6 xl:px-[8rem]">
      <h1 className='text-aqua font-title text-[2rem] xl:text-[4rem] mt-12 text-center px-10'>
        <span className='text-[2.25rem] xl:text-[6rem] capitalize'>f</span>ind Your <span className='text-[2.25rem] xl:text-[6rem] capitalize'>m</span>orty
      </h1>

      <SearchBox value={searchText} onChange={setSearchText}/>
      
      <div title='filters' className='flex gap-6 mt-4'>

        <FilterPopover 
          setSearchFilters={setSearchFilters} 
          filterProp = {"species"}
          tags={[
            {title: "human"}, 
            {title: "alien"}, 
            {title: "humanoid"}, 
            {title:"mythological creature"}, 
            {title: "animal"},
            {title: "robot"},
            {title: "cronenberg"},
            {title: "disease"},
            {title: "unknow"}
          ]}
        />
        <FilterPopover 
          setSearchFilters={setSearchFilters} 
          filterProp = {"status"}
          tags={[{title: "dead"}, {title: "alive"}, {title: "unkown"}]}
        />
      </div>
      
      {loading && (
        <div className='w-full py-20 flex items-center justify-center'>
          <img src={portalImg} alt="loading" className='loading animate-spin rounded-full'/>
        </div>
        )
      }

      {/* <PagesButton pages={pages} actualPage={actualPage} setActualPage={setActualPage}/> */}

      <div className='mt-12'>
        { apiData.results && !loading && (
          <CharacterGrid props={apiData.results}/>
        )}

        { !apiData.results && !loading && (
          <span className='text-gray font-header text-4xl text-center md:text-center'>
            It seems like there's no character with these name or filters
         </span>
        )}

      </div>


      <PagesButton pages={pages} actualPage={actualPage} setActualPage={setActualPage}/>
      
      <Footer />
    </div>
  )
}

export default App
