import React from 'react'
import './FilterOption.css'

export default function FilterOption(props) {

  const handleChange = (option) => {
    props.SetRegionOption(option.target.value)
  };
  return (
    <select className='dropdown__mealtype' onChange={handleChange}>
          <option value="" disabled selected hidden>Choose mealtype</option>
            <option value={""}>All</option>
            <option value={'European'} >European</option>
            <option value={'Italian'}>Italian</option>
            <option value={'Japanese'}>Japanese</option>
          </select>
  )
}
