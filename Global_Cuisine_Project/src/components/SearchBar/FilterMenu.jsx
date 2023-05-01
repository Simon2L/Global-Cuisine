import { useState } from 'react';
import { FaSearch, FaAlignLeft } from 'react-icons/fa'
import './FilterMenu.css'
import FilterOption from './FilterOption';

const FilterMenu = ({setRegionArray, regionArray, setMealTypeArray, mealTypeArray, 
    setDietArray, dietArray, setIntoleranceArray, intoleranceArray}) => {
    const regions = ["French", "Italian", "Spanish", "Chinese", "Nordic", "American", "Japanese", "Greek"]
    const mealTypes = ["breakfast", "main course", "drink"]
    const diets = ["Vegetarian", "Vegan", "Gluten Free"]
    const intolerances = ["Gluten", "Dairy"]
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
                <FilterOption Title={"Regions"} filters={regions} setArray={setRegionArray} array={regionArray}/>
                <FilterOption Title={"Meal Types"} filters={mealTypes} setArray={setMealTypeArray} array={mealTypeArray}/>
                <FilterOption Title={"Diets"} filters={diets} setArray={setDietArray} array={dietArray}/>
                <FilterOption Title={"intolerances"} filters={intolerances} setArray={setMealTypeArray} array={mealTypeArray}/>
            </aside>
        </>
    )
}

export default FilterMenu;
