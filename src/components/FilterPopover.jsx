import * as Popover from "@radix-ui/react-popover";
import { Check } from "phosphor-react";


export function FilterPopover({filtersSearch, filterProp, tags, setSearchFilters}) {

  return (
    <Popover.Root>
          <Popover.Trigger className='bg-aqua text-gray rounded-lg px-4 py-[0.75rem] hover:bg-darkPurple hover:outline hover:outline-aqua '>
            {filterProp}
          </Popover.Trigger>

          <Popover.Portal>
            <Popover.Content 
              align="start" 
              className="bg-darkPurple flex flex-col px-10 pl-6 py-6 gap-3 rounded-md ">

              {
                tags.map((tag) => {
                  return (
                    <div className='flex gap-4' key={tag.title}>
                      <button 
                        className="p-1 w-6 bg-cream rounded-sm content-['']"
                        onClick={() => {
                          removeFilterDuplicate(tag.title)
                          setSearchFilters(setFiltersTag(tag.title))
                        }}
                      >  
                        { filtersSearch.length > 0 && handleHasTag(tag.title) == true && (
                            <Check weight='bold'></Check> 
                          )
                        }
                      </button>
                      <span className='text-aqua text-[1.125rem]'>{tag.title}</span>
                  </div>
                  )
                })
              }
              
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
  )
}