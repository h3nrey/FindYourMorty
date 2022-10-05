import * as Popover from "@radix-ui/react-popover";
import { Check } from "phosphor-react";
import { useState } from "react";


export function FilterPopover({filterProp, tags, setSearchFilters}) {

  const [selectedFilter, setSelectedFilter] = useState();
  return (
    <Popover.Root>
          <Popover.Trigger className='bg-aqua text-gray rounded-lg px-4 py-[0.75rem] 
          hover:bg-darkPurple hover:outline flex gap-2 outline outline-aqua outline-0 hover:outline-4 transition-all'>
            {filterProp} <span className="text-yellow hidden md:block font-header text-[1.125rem]">{selectedFilter}</span>
          </Popover.Trigger>

          <Popover.Portal>
            <Popover.Content 
              align="start" 
              className="">
                <ul className="bg-darkPurple flex flex-col gap-4 px-4 py-6 rounded-md">
                  {
                    tags.map((tag) => {
                      return (
                        <li className='flex gap-4' key={tag.title}>
                          <button 
                            className="p-1 w-6 h-6 bg-yellow rounded-sm content-['']"
                            onClick={() => {
                              if(selectedFilter == tag.title) {
                                setSelectedFilter()
                                setSearchFilters(filterProp, "")
                              } else {
                                setSelectedFilter(tag.title)
                                setSearchFilters(filterProp, tag.title)
                              }
                            }}
                          >  
                            { selectedFilter == tag.title && (
                                <Check weight='bold'></Check> 
                              )
                            }
                          </button>
                          <span className='text-[#fff] text-[1.125rem]'>{tag.title}</span>
                      </li>
                      )
                    })
                  }      
                </ul>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
  )
}