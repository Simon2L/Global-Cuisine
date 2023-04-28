import React from 'react'
import './FilterOption.css'

export default function FilterOption({Title, filters}) {
    // console.log(filters)
  const handleClick = (item) => {
    item[1] = !item[1]
  }

  const handleChange = (option) => {
    SetOption(option.target.value)
  };
  return (
    <>
      <label> {Title} </label>
      <select className='dropdown__mealtype' onChange={handleChange}>
        {/* <option value="" disabled selected hidden>{Title}</option> */}
        <option value={""}>None</option>
        {filters?.map((filter) => {
          return(
            <option onClick={() => handleClick(filter)} 
            key={filter[0]}
            style={{backgroundColor: filter[1] ? "white" : "red"}}>
            {filter[1]}</option>
          )
        })}
      </select>
    </>
  )
}

 
