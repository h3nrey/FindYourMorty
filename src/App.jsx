import { useEffect, useState } from 'react'
import axios from 'axios';

//assets
import portalImg from "./assets/Portal.png"

//components
import { CharacterGrid } from './components/CharactersGrid';
import { FilterPopover } from './components/FilterPopover';
import { SearchBox } from './components/SearchBox';import { PagesButton } from './components/PagesButton';
import { Footer } from './components/Footer';
import { ScrollupButton } from './components/ScrollupButton';
import { Title } from './components/Title';

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

  //loading  
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
      console.log(error);
      setLoading(false);
      setApiData(["error"])
      setActualPage(1)
      setPages(0)
    })
  }, [actualPage, searchText, characterStatus, characterSpecie])
  
  return (
    <div className="App px-6 xl:px-[8rem]">
      <Title />

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
          <img 
          src={portalImg} 
          alt="loading" 
          className='loading animate-spin rounded-full'/>
        </div>
        )
      }

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
      
      <ScrollupButton /> 

      {actualPage > 0 && (
        <PagesButton pages={pages} actualPage={actualPage} setActualPage={setActualPage}/>
      )}
      
      <Footer />
    </div>
  )
}

export default App
