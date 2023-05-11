import "./Searchbar.css";
import { FaSearch, FaAlignLeft } from "react-icons/fa";
import logoimage from "../assets/logo-no-background.svg";
import { useEffect, useState } from "react";
import FilterMenu from "./SearchBar/FilterMenu";
import { Form } from "react-router-dom";

const Searchbar = (props) => {

    
    const optionsTemplate = { // hur options ser ut innan några värden har valts
        region: [],
        mealtype: [],
        diet: [],
        intolerance: [],
      }

  const [options, setOptions] = useState(optionsTemplate);

  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [update, setUpdate] = useState(true); // ska bara uppdatera för att orsaka en rerender i slutet av updateOptions-metoden

  const updateOptions = (value, arrName) => { // lägger till value i rätt array(dvs. region, mealtype, diet eller intolerance)
    const arr = options;

    if (arrName == "Regions") {
      options.region.includes(value)
        ? arr.region.splice(arr.region.indexOf(value), 1)
        : arr.region.push(value);
    }
    if (arrName == "Mealtypes") {
      options.mealtype.includes(value)
        ? arr.mealtype.splice(arr.mealtype.indexOf(value), 1)
        : arr.mealtype.push(value);
    }
    if (arrName == "Diets") {
      options.diet.includes(value)
        ? arr.diet.splice(arr.diet.indexOf(value), 1)
        : arr.diet.push(value);
    }
    if (arrName == "Intolerances") {
      options.intolerance.includes(value)
        ? arr.intolerance.splice(arr.intolerance.indexOf(value), 1)
        : arr.intolerance.push(value);
    }

    setOptions(arr);
    setUpdate(!update)
    // console.log(arr);

  };

  const ClearFilters = () => setOptions(optionsTemplate); // återställer options

  const PrintFilters = (array) => {
    let filterString = "";
    array.forEach((element) => {
      filterString += `${element}, `;
    });

    return filterString.slice(0, -2); // slice tar bort sista kommatecknet så den sista filtret funkar
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getRecipes();
    // reseting the filters after search
    ClearFilters();
  };

  const SelectedLabels = () => { // skriver ut alla valda options
    let labels = [];
    let count = 0;
    for(const arr in options){
        labels[count] = options[arr].map((opt) => {
            return( 
                <label className="label-filter" key={opt}>{opt}</label>
            )
        })
        count++;
    }
    return labels;
    
  }


  // fetch
  const getRecipes = async () => {
    const apiKey = "6afda3141a6246569ed46a639cbfbfa6";
    try {
      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`
      +`&query=${search}&cuisine=${PrintFilters(options.region)}&` +
        `type=${PrintFilters(options.mealtype)}&` +
        `diet=${PrintFilters(options.diet)}&` +
        `intolerances=${PrintFilters(options.intolerance)}&` +
        `addRecipeInformation=true&addRecipeNutritionadd=true&fillIngredients=true&number=100`;
      const response = await fetch(url);
      const result = await response.json();
      // console.log(result)
      props.setRecipes(result);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <section className="search-form">
        <img src={logoimage} alt="global cuisine" className="logoimage"></img>
        <div className="search-form__container">
          <Form className="search-form__form" onSubmit={handleSubmit}>
            <input
              className="search-form__input"
              onChange={(e) => setSearch(e.target.value)}
              maxLength={25}
              data-="text"
              placeholder="Search..."
            />
            <FaSearch className="search-form__submit" />
          </Form>
          <FilterMenu
            updateOptions={updateOptions}
            setShowFilter={setShowFilter}
            showFilter={showFilter}
            Clear={ClearFilters}
          />
        </div>
      </section>
      <section className="filter-container">
        <SelectedLabels /> 
      </section>
    </>
  );
};

export default Searchbar;

