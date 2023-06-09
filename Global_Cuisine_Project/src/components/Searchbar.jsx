import "./Searchbar.css";
import { FaSearch, FaTimesCircle } from "react-icons/fa";
import logoimage from "../assets/logo-no-background.svg";
import { useState } from "react";
import FilterMenu from "./SearchBar/FilterMenu";
import { Form } from "react-router-dom";
import getRecipes from "./SearchResults/functions/getRecipes";

const Searchbar = ({
  setRecipes,
  setOptions,
  options,
  search,
  setSearch,
  setOffSet,
  setTotalRecipes,
}) => {
  const optionsTemplate = {
    // hur options ser ut innan några värden har valts
    region: [],
    mealtype: [],
    diet: [],
    intolerance: [],
  };
  const [showFilter, setShowFilter] = useState(false);
  const [update, setUpdate] = useState(true); // ska bara uppdatera för att orsaka en rerender i slutet av updateOptions-metoden

  const handleSubmit = async (e) => {
    e.preventDefault();
    let recipeData = await getRecipes(search, options, 0);
    setRecipes(recipeData.results);
    setOffSet(24);
    setTotalRecipes(recipeData.totalResults);
  };

  const updateOptions = (value, arrName) => {
    // lägger till value i rätt array(dvs. region, mealtype, diet eller intolerance)
    const arr = options;

    if (arrName == "regions") {
      options.region.includes(value)
        ? arr.region.splice(arr.region.indexOf(value), 1)
        : arr.region.push(value);
    }
    if (arrName == "mealtypes") {
      options.mealtype.includes(value)
        ? arr.mealtype.splice(arr.mealtype.indexOf(value), 1)
        : arr.mealtype.push(value);
    }
    if (arrName == "diets") {
      options.diet.includes(value)
        ? arr.diet.splice(arr.diet.indexOf(value), 1)
        : arr.diet.push(value);
    }
    if (arrName == "intolerances") {
      options.intolerance.includes(value)
        ? arr.intolerance.splice(arr.intolerance.indexOf(value), 1)
        : arr.intolerance.push(value);
    }

    setOptions(arr);
    setUpdate(!update);
    // console.log(arr);
  };

  const ClearFilters = () => setOptions(optionsTemplate); // återställer options

  const SelectedLabels = () => {
    // skriver ut alla valda options
    let labels = [];
    let count = 0;
    for (const arr in options) {
      labels[count] = options[arr].map((opt) => {
        return (
          <div className="label-filter" key={opt}>
            <label className="label-filter-label">{opt}</label>
            <FaTimesCircle
              onClick={() => {
                updateOptions(opt, arr + "s");
              }}
              className="label-filter-exit"
            />
          </div>
        );
      });
      count++;
    }
    return labels;
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
      <section className="filtername-container">
        <SelectedLabels />
      </section>
    </>
  );
};

export default Searchbar;
