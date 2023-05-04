import './Searchbar.css'
import { FaSearch, FaAlignLeft } from 'react-icons/fa'
import logoimage from '../assets/logo-no-background.svg';
import { useState } from 'react';
import FilterMenu from './SearchBar/FilterMenu';
import { Form } from "react-router-dom";





const Searchbar = (props) => {
    const [options, setOptions] = useState({
        region: [], mealtype:[], diet: [], introlerance: []
    })
    const [regionOption, setRegionOption] = useState([])
    const [mealTypeOption, setMealTypeOption] = useState([])
    const [dietOption, setDietOption] = useState([])
    const [intoleranceOption, setIntoleranceOption] = useState([])
    const [search, setSearch] = useState("");

    const updateOptions = (value, name) => {

        const arr = options;
        console.log(name)

        if(name == "Regions"){
            console.log(value)
            options.region.includes(value) ?
            arr.region.splice(arr.region.indexOf(value), 1) :
            arr.region.push(value)
        }
        if(name == "Mealtypes"){
            options.mealtype.includes(value) ?
                arr.mealtype.splice(arr.mealtype.indexOf(value), 1) :
                arr.mealtype.push(value)
        }
        if(name == "Diets"){
            options.diet.includes(value) ?
                arr.diet.splice(arr.diet.indexOf(value), 1) :
                arr.diet.push(value)
        }
        if(name == "Intolerances"){
            options.intolerance.includes(value) ?
                arr.intolerance.splice(arr.intolerance.indexOf(value), 1) :
                arr.intolerance.push(value)
        }

        setOptions(arr);
        console.log(arr)
    }

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
    // reseting the filters after search
    setRegionOption([])
    setMealTypeOption([])
    setDietOption([])
    setIntoleranceOption([])
}

// const MapLabels = ({filter}) => {
//     const labels = filter?.map((item) => {
//         return(
//             <label className='labelFilter' key={item}>{item}</label>
//             )
//         })
       
//         return(
//             labels
//         )
// }

const getRecipes = async () => {
    const apiKey = '6afda3141a6246569ed46a639cbfbfa6';
    try {
        //const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`
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
            <div className="search-form__container">
            <Form className="search-form__form" onSubmit={handleSubmit}>
                <input className="search-form__input" onChange={(e) => setSearch(e.target.value)} maxLength={25} data-="text" placeholder="Search..."/>
                <FaSearch className="search-form__submit" />
            </Form>
            <FilterMenu updateOptions={updateOptions} />
            </div>
        </section>
        {/* <section className='filter-Container'>
            <MapLabels filter={regionOption}/>
            <MapLabels filter={mealTypeOption}/>
            <MapLabels filter={dietOption}/>
            <MapLabels filter={intoleranceOption}/>
       </section> */}
                
                
    
        </>
    )
}
           

export default Searchbar;
