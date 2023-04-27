import React from 'react'
import './FilterOption.css'

export default function FilterOption() {
  return (
    <select className='dropdown__mealtype'>
          <option value="" disabled selected hidden>Choose mealtype</option>
            <option value={'frukost'}>Frukost</option>
            <option value={'lunch'}>Lunch</option>
            <option value={'middag'}>Middag</option>
          </select>
  )
}
