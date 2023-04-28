import React, { useState } from 'react'
import './FilterOption.css'
import FilterButton from './FilterButton'

export default function FilterOption({Title, filters}) {
  const [open, SetOpen] = useState(false)
  
  
  const onClick = () => {
    SetOpen(!open)
  }
 

  const ShowFilter = () => {
    return(
      <div className='filterContainer'>
        {filters?.map((item) => {
          return(
            <FilterButton key={item} filterName={item[0]} active={item[1]} />
          )
        })}
    </div>
    )
  }
  
  return (
    <>
      <div className='MenuContainer' >
        <h3 onClick={() => onClick()}>{Title}</h3>
        { open ? 
          <div> 
            <ShowFilter /> 
          </div> : 
        <></>}
      </div>
    </>
  )
}





 
