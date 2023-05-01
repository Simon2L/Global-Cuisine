import './Searchbar.css'
import { FaSearch, FaAlignLeft } from 'react-icons/fa'
import logoimage from '../assets/logo-no-background.svg';
import { useState } from 'react';
import FilterMenu from './SearchBar/FilterMenu';
import { Form } from "react-router-dom";




const Searchbar = (props) => {
    const [regionOption, setRegionOption] = useState("")
    const [mealTypeOption, setMealTypeOption] = useState("")
    const [dietOption, setDietOption] = useState("")
    const [intoleranceOption, setIntoleranceOption] = useState([])
    const [search, setSearch] = useState("");
   
    let region = [""] 
    let mealType = ["breakfast"]
    let diet = ["Vegan"]
    let intolerance = ["Gluten", "Dairy"]

   const PrintFilters = (array) => {
    let filterString = ""
    array.forEach(element => {
        filterString += `${element}, `
    });

    return filterString
    };
        

const handleSubmit = (e) => {
    e.preventDefault();
    getRecipes();
}


const getRecipes = async () => {
    const apiKey = 'd9621eb8bc7949e39c16d7f5fab52053';
    try {
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`
        + `&query=${search}&cuisine=${PrintFilters(region)}&`
        + `type=${PrintFilters(mealType)}&`
        + `diet=${PrintFilters(diet)}&`
        + `intolerances=${PrintFilters(intolerance)}&`
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
            <Form className="search-form__container" onSubmit={handleSubmit}>
                <input className="search-form__input" onChange={(e) => setSearch(e.target.value)} maxLength={25} data-="text" placeholder="Search..."/>
                <FaSearch className="search-form__submit" />
                
                
            </Form>
            <FilterMenu region={region} mealType={mealType} diet={diet} intolerance={intolerance} />
        </section>
    
        </>
    )
}
           

export default Searchbar;
