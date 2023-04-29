import React, { useState } from 'react'
import './FilterOption.css'
import FilterButton from './FilterButton'

export default function FilterOption({Title, filters}) {
  const [open, SetOpen] = useState(false)
  const [array, setArray] = useState([])


  const onClick = () => {
    SetOpen(!open)
  }
 



  const ShowFilter = () => {
    return(
      <div className='filterContainer'>
        {filters?.map((item) => {
          return(
            <FilterButton filterName={item} setArray={setArray} array={array} />
          )
        })}
        <h1>{array}</h1>
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





 
