import { useState } from 'react';
import { FaSearch, FaAlignLeft } from 'react-icons/fa'
import './FilterMenu.css'
import FilterOption from './FilterOption';

const FilterMenu = ({SetRegionOption, setMealTypeOption, setDietOption, setIntoleranceOption}) => {
    const regions= [["European", "European"], ["Japanese", "Japanese"], ["Italian", "Italian"], ["Nordic", "Nordic"]]
    const diets = [["Glutens Free", "Glutens Free"], ["Vegetarian", "Vegeterian"], ["Vegan", "Vegan"], ["Pescetarian", "Pescetarian"]]
    const mealTypes = [["breakfast", "Breakfast"],["main course", "Main Course"], ["dessert", "Dessert"]]
    const intolerances = [["Gluten", "Gluten Free"], ["Peanut", "Peanut Free"], ["Dairy", "Dairy Free"], ["Soy", "Soy Free"]]
   
    const [show, setShow] = useState(false);

    const changeHandle = () => show ? setShow(false) : setShow(true)


    return(
        <>
        <button  className='search-form__filter' onClick={() => changeHandle()}>
                <FaAlignLeft />
            </button>
            <aside className={"filter-menu" + (show ? " is-active" : "")}>
                <FilterOption Title={"Choose Region"} filters={regions} SetOption={SetRegionOption} id={"reg"} />
                <FilterOption Title={"Meal Type"} filters={mealTypes} SetOption={setMealTypeOption} id={"type"}/>
                <FilterOption Title={"Diet"} filters={diets} SetOption={setDietOption} id={"diet"}/>
                <FilterOption Title={"Intolerances"} filters={intolerances} SetOption={setIntoleranceOption} id={"int"}/>
            </aside>
        </>
    )
}

export default FilterMenu;