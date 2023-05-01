import { useState } from 'react';
import { FaSearch, FaAlignLeft } from 'react-icons/fa'
import './FilterMenu.css'
import FilterOption from './FilterOption';

const FilterMenu = ({setRegionArray, regionArray, setMealTypeArray, mealTypeArray, 
    setDietArray, dietArray, setIntoleranceArray, intoleranceArray}) => {
    const regions = ["French", "Italian", "Spanish"]
    const mealTypes = ["breakfast", "main course", "drink"]
    const [show, setShow] = useState(false);

    const changeHandle = () => {
        setShow(!show)
      
    }


    return(
        <>
        <button  className='search-form__filter' onClick={() => changeHandle()}>
                <FaAlignLeft />
            </button>
            <aside className={"filter-menu" + (show ? " is-active" : "")}>
                <FilterOption Title={"Region"} filters={regions} setArray={setRegionArray} array={regionArray}/>
                <FilterOption Title={"Meal Type"} filters={mealTypes} setArray={setMealTypeArray} array={mealTypeArray}/>
            </aside>
        </>
    )
}

export default FilterMenu;
