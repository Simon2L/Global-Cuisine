import { useState } from "react";
import { FaAlignLeft, FaTimes } from "react-icons/fa";
import "./FilterMenu.css";
import FilterOption from "./FilterOption";

const FilterMenu = ({ updateOptions, setShowFilter, showFilter }) => {
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
    mealtype: ["breakfast", "main course", "drink"],
    diet: ["Vegetarian", "Vegan", "Gluten Free"],
    intolerance: ["Gluten", "Dairy"],
  };
  // const regions = ["French", "Italian", "Spanish", "Chinese", "Nordic", "American", "Japanese", "Greek"]
  // const mealTypes = ["breakfast", "main course", "drink"]
  // const diets = ["Vegetarian", "Vegan", "Gluten Free"]
  // const intolerances = ["Gluten", "Dairy"]
  const [show, setShow] = useState(false);

  const changeHandle = () => {
    setShowFilter(!showFilter);
  };

  return (
    <>
      <button className="search-form__filter" onClick={() => changeHandle()}>
        <FaAlignLeft />
      </button>
      <aside className={"filter-menu" + (showFilter ? " is-active" : "")}>
        <FaTimes
          className="filter-menu__close"
          onClick={() => changeHandle()}
        />
        <FilterOption
          title={"Regions"}
          filters={allOptions.region}
          updateOptions={updateOptions}
          showFilter={showFilter}
        />
        <FilterOption
          title={"Mealtypes"}
          filters={allOptions.mealtype}
          updateOptions={updateOptions}
          showFilter={showFilter}
        />
        <FilterOption
          title={"Diets"}
          filters={allOptions.diet}
          updateOptions={updateOptions}
          showFilter={showFilter}
        />
        <FilterOption
          title={"Intolerances"}
          filters={allOptions.intolerance}
          updateOptions={updateOptions}
          showFilter={showFilter}
        />
      </aside>
    </>
  );
};

export default FilterMenu;
