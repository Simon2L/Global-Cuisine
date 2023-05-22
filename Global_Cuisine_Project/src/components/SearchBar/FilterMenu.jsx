import { FaAlignLeft, FaChevronRight } from "react-icons/fa";
import "./FilterMenu.css";
import FilterOption from "./FilterOption";

const FilterMenu = ({ updateOptions, setShowFilter, showFilter, Clear }) => {
  // alla alternativ som man kan välja i filtret
  const allOptions = {
    region: [
      "French",
      "Italian",
      "Spanish",
      "Chinese",
      "Nordic",
      "American",
      "Japanese",
      "Greek",
    ],
    mealtype: ["Breakfast", "Main-Course", "Drink"],
    diet: ["Vegetarian", "Vegan", "Gluten Free"],
    intolerance: ["Gluten", "Dairy"],
  };
  // const regions = ["French", "Italian", "Spanish", "Chinese", "Nordic", "American", "Japanese", "Greek"]
  // const mealTypes = ["breakfast", "main course", "drink"]
  // const diets = ["Vegetarian", "Vegan", "Gluten Free"]
  // const intolerances = ["Gluten", "Dairy"]

  const changeHandle = () => {
    setShowFilter(!showFilter);
  };

  const ClearButton = () => {
    return(
      <>
        <button className="clear-btn" onClick={() => Clear()}>CLEAR</button>
      </>
    )
  }

  return (
    <>
      <button className="search-form__filter" onClick={() => changeHandle()}>
        <FaAlignLeft />
      </button>
      <aside className={"filter-menu" + (showFilter ? " is-active" : "")}>
        <div>
        <FaChevronRight
          className="filter-menu-close"
          onClick={() => changeHandle()}
        /></div>
        <FilterOption
          title={"regions"}
          filters={allOptions.region}
          updateOptions={updateOptions}
          showFilter={showFilter}
        />
        <FilterOption
          title={"mealtypes"}
          filters={allOptions.mealtype}
          updateOptions={updateOptions}
          showFilter={showFilter}
        />
        <FilterOption
          title={"diets"}
          filters={allOptions.diet}
          updateOptions={updateOptions}
          showFilter={showFilter}
        />
        <FilterOption
          title={"intolerances"}
          filters={allOptions.intolerance}
          updateOptions={updateOptions}
          showFilter={showFilter}
        />
        <ClearButton />
      </aside>
    </>
  );
};

export default FilterMenu;
