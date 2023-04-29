import './FilterButton.css'
import React, { useState } from 'react'

function FilterButton({filterName, setArray, array}) {
  let tempArray = array
  const [active, setActive] = useState(false)
  
   

  const RemoveFilter = (filter) => {
    const index = tempArray.indexOf(filter);
    if (index > -1) { 
    tempArray.splice(index, 1); 
}
  }

  const onBtnClick = (filter) => {
      active ?  RemoveFilter(filter) : tempArray.push(filter)
      setActive(!active)
      setArray(tempArray)
      console.log(array)
  }
  return (
    <button className={active ? 'active' : 'notActive' } onClick={() => onBtnClick(filterName)}>{filterName}</button>
  )
}

export default FilterButton