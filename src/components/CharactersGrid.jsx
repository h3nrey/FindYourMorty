export function CharacterGrid({props}) {
  return (

    <>
      {
        props.length > 0 && (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-4">
            {
              props.map(character => {
                return(
                  <li 
                    key={character.id}
                    className="flex flex-col rounded-3xl rounded-tl-lg rounded-br-lg overflow-hidden relative group"
                  >
                    <div className="w-full h-full">
                      <div 
                        style={{backgroundImage: `url("${character.image}")`}} 
                        alt={character.name}  
                        className="bg-blend-hard-light bg-purpleBg hover:bg-blend-color-dodge bg-cover bg-center w-full h-[21.38rem]"
                        />

                    </div>
                    <div 
                    className="absolute bg-darkPurple flex flex-col items-center
                     bottom-0 md:-bottom-16 md:group-hover:bottom-0  w-full py-4 pt-6 gap-8 transition-all"
                    >
                      <div className="flex flex-col items-center">
                        <strong className="font-header text-aqua text-[2rem] text-center px-1">{character.name}</strong>
                        <span className="text-yellow"> ({character.species})</span>
                      </div>
                      
                      <span className="text-gray text-[1.125rem]"> {character.status} | {character.episode.length} episode(s)</span>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        )}
    </>
      
  )
}