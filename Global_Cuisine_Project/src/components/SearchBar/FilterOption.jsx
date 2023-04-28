import React from 'react'
import './FilterOption.css'

export default function FilterOption({SetOption, Title, filters, id }) {
  

  // console.log(filters)
  const handleChange = (option) => {
    SetOption(option.target.value)
  };
  return (
    <>
      <label htmlFor={id}> {Title} </label>
      <select id={id} className='dropdown__mealtype' onChange={handleChange}>
        {/* <option value="" disabled selected hidden>{Title}</option> */}
        <option value={""}>None</option>
        {filters.map((filter) => {
          return(
            <option key={filter[0]} value={filter[0]}>{filter[1]}</option>
          )
        })}
      </select>
    </>
  )
}

 
