import React from 'react'
import './FilterOption.css'

export default function FilterOption({SetOption, Title, filters, id }) {
  

  // console.log(filters)
  const handleChange = (option) => {
    SetOption(option.target.value)
  };
  return (
    <>
    <select id={id} className='dropdown__mealtype' onChange={handleChange}>
      {/* <option value="" disabled selected hidden>{Title}</option> */}
      <option value={""}>All</option>
          {filters.map((filter) => {
            return(
              <option key={filter} value={filter}>{filter}</option>
            )
            })}
    </select>
    <label for={id}> {Title} </label>
    </>

  )
}
