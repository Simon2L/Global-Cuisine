import './Searchbar.css'
import { FaSearch, FaAlignLeft } from 'react-icons/fa'
import logoimage from '../assets/logo-no-background.svg';
import { useState } from 'react';
import FilterMenu from './SearchBar/FilterMenu';




const Searchbar = (props) => {
    const [regionOption, setRegionOption] = useState("")
    const [mealTypeOption, setMealTypeOption] = useState("")
    const [dietOption, setDietOption] = useState("")
    const [intoleranceOption, setIntoleranceOption] = useState("")
    const [search, setSearch] = useState("");


const handleSubmit = (e) => {
    e.preventDefault();
    getRecipes();
}

const getRecipes = async () => {
    const apiKey = '5792d7fbb36b444fa9f484820f5fb862';
    try {
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`
        + `&query=${search}&cuisine=${regionOption}&`
        + `type=${mealTypeOption}&`
        + `diet=${dietOption}&`
        + `addRecipeInformation=true&addRecipeNutritionadd=true&fillIngredients=true&number=100`;
        const response = await fetch(url);
        const result = await response.json();
        console.log(result)
        props.setRecipes(result.results);
      } catch (e) {
        console.log(e);
      }
}

    return(
        <>
        
        <section className="search-form">
            <img src={logoimage} alt="global cuisine" className='logoimage'></img>
            <form className="search-form__container" onSubmit={handleSubmit}>
                <input className="search-form__input" onChange={(e) => setSearch(e.target.value)} maxLength={25} data-="text" placeholder="Search..."/>
                <FaSearch className="search-form__submit" />
                
                
            </form>
            {/* ref={menuRef} */}
            {/* <button  className='search-form__filter' onClick={ () => changeHandle()}>
                <FaAlignLeft />
            </button> */}
            <FilterMenu SetRegionOption={setRegionOption} setMealTypeOption={setMealTypeOption} 
            setDietOption={setDietOption} setIntoleranceOption={setIntoleranceOption}/>
        </section>
        </>
    )
}
           

export default Searchbar;
