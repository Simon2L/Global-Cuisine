import './Searchbar.css'
import { FaSearch, FaAlignLeft } from 'react-icons/fa'
import logoimage from '../assets/logo-no-background.svg';
import { useState } from 'react';
import FilterMenu from './SearchBar/FilterMenu';




const Searchbar = (props) => {
    const [regionOption, setRegionOption] = useState("")
    const [mealTypeOption, setMealTypeOption] = useState("")
    const [dietOption, setDietOption] = useState("")
    const [intoleranceOption, setIntoleranceOption] = useState([])
    const [search, setSearch] = useState("");
    let intolerance = [["Gluten,", true], ["Dairy", true]]
    let diet = [["Vegetarian,", true], ["Vegan", true]]

    let test = ""
    diet.forEach(item => {
        if(item[1] === true) test += item[0]
    });

    
    
    // let text = array.map((item) =>{
    //     if(item[1] === true) return `${item[0]},`
    //     else return ' '
    // })

const handleSubmit = (e) => {
    e.preventDefault();
    getRecipes();
}
// + `intolerances=${intoleranceOption.map((item => `${item},`))}&`

const getRecipes = async () => {
    const apiKey = 'ca68133f5df34a13b64e53f977918ba8';
    try {
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`
        + `&query=${search}&cuisine=${regionOption}&`
        + `type=${mealTypeOption}&`
        + `diet=${test}&`
        + `intolerances=${""}&`
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
            <div>
                <label>{regionOption}</label>
                <label>{mealTypeOption}</label>
                <label>{dietOption}</label>
                <label>{intoleranceOption}</label>
            </div>
             
        </section>
    
        </>
    )
}
           

export default Searchbar;
