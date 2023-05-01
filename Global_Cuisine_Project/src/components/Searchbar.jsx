import './Searchbar.css'
import { FaSearch, FaAlignLeft } from 'react-icons/fa'
import logoimage from '../assets/logo-no-background.svg';
import { useState } from 'react';
import FilterMenu from './SearchBar/FilterMenu';
import { Form } from "react-router-dom";





const Searchbar = (props) => {
    const [regionOption, setRegionOption] = useState([])
    const [mealTypeOption, setMealTypeOption] = useState([])
    const [dietOption, setDietOption] = useState([])
    const [intoleranceOption, setIntoleranceOption] = useState([])
    const [search, setSearch] = useState("");


   const PrintFilters = (array) => {
        let filterString = ""
        array.forEach(element => {
        filterString += `${element}, `
        });

        return filterString.slice(0, -2) // slice tar bort sista kommatecknet så den sista filtret funkar
    };
        

const handleSubmit = (e) => {
    e.preventDefault();
    getRecipes();
}


const getRecipes = async () => {
    const apiKey = 'b6fe3c11873b42a0a632232c087c84e8';
    try {
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`
        + `&query=${search}&cuisine=${PrintFilters(regionOption)}&`
        + `type=${PrintFilters(mealTypeOption)}&`
        + `diet=${PrintFilters(dietOption)}&`
        + `intolerances=${PrintFilters(intoleranceOption)}&`
        + `addRecipeInformation=true&addRecipeNutritionadd=true&fillIngredients=true&number=100`;
        const response = await fetch(url);
        const result = await response.json();
        // console.log(result)
        props.setRecipes(result);
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
            <FilterMenu regionArray={regionOption}  mealTypeArray={mealTypeOption}
                dietArray={dietOption} intoleranceArray={intoleranceOption}
                setRegionArray={setRegionOption} setMealTypeArray={setMealTypeOption}
                setDietArray={setDietOption} setIntoleranceArray={setIntoleranceOption} />
        </section>
        <section>
            {regionOption?.map((item) => {
                return(
                    <label key={item}>{item}</label>
                    )
                })}
            {mealTypeOption?.map((item) => {
                return(
                    <label key={item}>{item}</label>
                )
                })}
            {dietOption?.map((item) => {
                return(
                    <label key={item}>{item}</label>
                )
                })}
            {intoleranceOption?.map((item) => {
                return(
                    <label key={item}>{item}</label>
                )
            })}
       </section>
                
                
    
        </>
    )
}
           

export default Searchbar;
