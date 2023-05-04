import React, { useState } from 'react'
import './FilterOption.css'
import FilterButton from './FilterButton'

export default function FilterOption({Title, filters, setArray, array}) {
  const [open, SetOpen] = useState(false)


  const onClick = () => {
    SetOpen(!open)
  }
 



  const ShowFilter = () => {
    return(
      <div className='filterContainer'>
        {filters?.map((item) => {
          return(
            <FilterButton key={item} filterName={item} setArray={setArray} array={array} />
          )
        })}
    </div>
    )
  }
  
  return (
    <>
      <div className='MenuContainer' onClick={() => onClick()} >
        <h3>{Title}</h3>
        { open ? 
          <div> 
            <ShowFilter /> 
          </div> : 
        <></>}
      </div>
    </>
  )
}





 
