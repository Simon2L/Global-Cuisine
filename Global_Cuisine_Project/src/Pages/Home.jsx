import React, { useEffect } from 'react'
import Searchbar from '../components/Searchbar'
import RecipesGeo from '../components/RecipesGeolocation/RecipesGeo'
import RecipesContainer from '../components/SearchResults/RecipesContainer'
import { useState } from 'react';
import {useRef} from 'react';
import './Home.css'
import getRecipes from '../components/SearchResults/functions/getRecipes';

const optionsTemplate = { // hur options ser ut innan några värden har valts
  region: [],
  mealtype: [],
  diet: [],
  intolerance: [],
}

function Home() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [totalRecipes, setTotalRecipes] = useState([]);
  const [options, setOptions] = useState(optionsTemplate);
  const [offset, setOffSet] = useState(24)
  const ref = useRef(null)

  

  const onLoadMore = async () => {
    console.log("Hello")
    let oldRecipesList = recipes
    console.log(oldRecipesList)
    let moreRecipes = await getRecipes(search, options.region, options.mealtype, options.diet, options.intolerance, offset)
    console.log(moreRecipes.results)
    setRecipes(oldRecipesList.concat(moreRecipes.results))
    setOffSet(offset + 24)
  }

  useEffect(() => 
  {
    if(offset === 24) ref.current?.scrollIntoView({behavior: 'smooth'});
    setTotalRecipes(recipes.totalResults)
  },[recipes])
    
  
  return (
    <>
      <Searchbar setRecipes={setRecipes} setOptions={setOptions} options={options} search={search} setSearch={setSearch}/>
      <RecipesGeo />
      <div ref={ref} >
        <RecipesContainer data={recipes} total={totalRecipes} />
        {recipes.length >= 24 ? 
        <div className='searchResultContainer'>
          <p>{offset} recipes loaded</p>
          <button className='loadBtn' onClick={() => onLoadMore()}>Load more</button> 
        </div>
        : <></>}
      </div>
    </>
  )
}
   
     
      



export default Home;
