import React, { useState } from 'react'
import './FilterOption.css'

export default function FilterOption({title, filters, updateOptions}) {
  const [open, SetOpen] = useState(false)


  const onClick = () => {
    SetOpen(!open)
  }
 



  const ShowFilter = () => { 
    return(
    <div className="filter-container">
      {open ? 
      filters.map((item) => <button key={item} onClick={() => updateOptions(item, title)} className="filter-btn">{item}</button>) :
      <></>}
    </div>)
  }
  
  return (
    <>
      <button className="menu-item-btn" onClick={onClick}>{title}</button>
      <ShowFilter />
    </>
  )
}





      // <div className='MenuContainer' >
      //   <h3 onClick={() => onClick()}>{Title}</h3>
      //   { open ? 
      //     <div> 
      //       <ShowFilter /> 
      //     </div> : 
      //   <></>}
      // </div>
