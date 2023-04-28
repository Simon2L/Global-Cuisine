import { useState } from 'react';
import { FaSearch, FaAlignLeft } from 'react-icons/fa'
import './FilterMenu.css'
import FilterOption from './FilterOption';

const FilterMenu = ({region, mealType, diet, intolerance}) => {
   
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
                <FilterOption Title={"Region"} filters={region}/>
                <FilterOption Title={"Meal Type"} filters={mealType}/>
                <FilterOption Title={"Diet"} filters={diet}/>
                <FilterOption Title={"intolerances"} filters={intolerance}/>
                
            </aside>
        </>
    )
}

export default FilterMenu;
