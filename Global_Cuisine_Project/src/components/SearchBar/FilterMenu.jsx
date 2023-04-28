import { useState } from 'react';
import { FaSearch, FaAlignLeft } from 'react-icons/fa'
import './FilterMenu.css'
import FilterOption from './FilterOption';

const FilterMenu = ({SetRegionOption, setMealTypeOption, setDietOption, setIntoleranceOption}) => {
    const regions= ["European", "Japanese", "Italian", "Nordic"]
    const diets = ["Glutens Free", "Vegetarian", "Vegan", "Pescetarian"]
    const mealTypes = ["breakfast","main course", "dessert"]
    const intolerances = ["Gluten", "Peanut", "Dairy", "Soy"]
   
    const [show, setShow] = useState(false);

    const changeHandle = () => show ? setShow(false) : setShow(true)


    return(
        <>
        <button  className='search-form__filter' onClick={() => changeHandle()}>
                <FaAlignLeft />
            </button>
            <aside className={"filter-menu" + (show ? " is-active" : "")}>
                <FilterOption Title={"Choose Region"} filters={regions} SetRegionOption={SetRegionOption} id={"reg"} />
                <FilterOption Title={"Meal Type"} filters={mealTypes} setMealTypeOption={setMealTypeOption} id={"type"}/>
                <FilterOption Title={"Diet"} filters={diets} setDietOption={setDietOption} id={"diet"}/>
                <FilterOption Title={"Intolerances"} filters={intolerances} setIntoleranceOption={setIntoleranceOption} id={"int"}/>
            </aside>
        </>
    )
}

export default FilterMenu;