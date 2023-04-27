import { useState } from 'react';
import { FaSearch, FaAlignLeft } from 'react-icons/fa'
import './FilterMenu.css'
import FilterOption from './FilterOption';

const FilterMenu = (props) => {
    
   
    const [show, setShow] = useState(false);

    const changeHandle = () => show ? setShow(false) : setShow(true)


    return(
        <>
        <button  className='search-form__filter' onClick={() => changeHandle()}>
                <FaAlignLeft />
            </button>
            <aside className={"filter-menu" + (show ? " is-active" : "")}>
                <FilterOption SetRegionOption={props.SetRegionOption}/>
                <FilterOption />
                <FilterOption />
            </aside>
        </>
    )
}

export default FilterMenu;