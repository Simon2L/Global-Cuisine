import './FilterButton.css'
import React, { useState } from 'react'

function FilterButton({filterName, active}) {
   
    const onBtnClick = () => {

        active = !active
    }
  return (
    <button className={active ? 'active' : 'notActive' } onClick={() => onBtnClick()}>{filterName}</button>
  )
}

export default FilterButton