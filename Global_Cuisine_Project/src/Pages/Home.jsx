import React, { useEffect } from 'react'
import Searchbar from '../components/Searchbar'
import RecipesGeo from '../components/RecipesGeolocation/RecipesGeo'
import RecipesContainer from '../components/SearchResults/RecipesContainer'
import { useState } from 'react';
import {useRef} from 'react';
import './Home.css'
import getRecipes from '../components/SearchResults/functions/getRecipes';


function Home() {
  const optionsTemplate = { // hur options ser ut innan några värden har valts
    region: [],
    mealtype: [],
    diet: [],
    intolerance: [],
  }
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [options, setOptions] = useState(optionsTemplate);
  const [offset, setOffSet] = useState(100)
  const ref = useRef(null)
  

  const onLoadMore = async () => {
    console.log("Hello")
    setRecipes(await getRecipes(search, options.region, options.mealtype, options.diet, options.intolerance, offset));
    setOffSet(offset + 100)
  }

  useEffect(() => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  },[recipes])
  
  return (
    <>
      <Searchbar setRecipes={setRecipes} setOptions={setOptions} options={options} search={search} setSearch={setSearch}/>
      <RecipesGeo />
      <div ref={ref} className='searchResultContainer'>
        <RecipesContainer data={recipes} />
        <button className='loadBtn' onClick={() => onLoadMore()}>Load more</button>
        <p>{offset}</p>
      </div>
    </>
  )
}
     



export default Home;
