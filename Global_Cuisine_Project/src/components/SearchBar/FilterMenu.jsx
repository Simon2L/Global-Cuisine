import { useState } from 'react';
import { FaSearch, FaAlignLeft } from 'react-icons/fa'
import './FilterMenu.css'
import FilterOption from './FilterOption';

const FilterMenu = ({array}) => {
   
   
    const [show, setShow] = useState(false);

    const changeHandle = () => show ? setShow(false) : setShow(true)


    return(
        <>
        <button  className='search-form__filter' onClick={() => changeHandle()}>
                <FaAlignLeft />
            </button>
            <aside className={"filter-menu" + (show ? " is-active" : "")}>
                <FilterOption Title={"Choose Region"} filters={array} />
                <FilterOption Title={"Meal Type"} filters={array}/>
                <FilterOption Title={"Diet"} filters={array}/>
                <FilterOption Title={"Intolerances"} filters={array}/>
            </aside>
        </>
    )
}

export default FilterMenu;