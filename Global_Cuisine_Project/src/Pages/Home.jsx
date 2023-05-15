import React, { useEffect } from 'react'
import Searchbar from '../components/Searchbar'
import RecipesGeo from '../components/RecipesGeolocation/RecipesGeo'
import RecipesContainer from '../components/SearchResults/RecipesContainer'
import { useState } from 'react';
import {useRef} from 'react';
import './Home.css'
import getRecipes from '../components/SearchResults/functions/getRecipes';
import LoadMore from '../components/LoadMore';


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
  const [offset, setOffSet] = useState(0)
  const ref = useRef(null)

  useEffect(() => 
  {
    if(offset === 20) ref.current?.scrollIntoView({behavior: 'smooth'});
  },[recipes])
  


    
  
  return (
    <>
      <Searchbar setRecipes={setRecipes} setOptions={setOptions} options={options} search={search} setSearch={setSearch} setOffSet={setOffSet}/>
      <RecipesGeo />
      <div ref={ref} >
        <RecipesContainer data={recipes} total={recipes.totalResults} />
        {recipes.length >= 20 ? // visas inte om inga recept har laddats fram än eller om den totala är mindre än 20
        <LoadMore recipes={recipes} setRecipes={setRecipes} offset={offset} setOffSet={setOffSet} search={search} options={options}/> : <></>}
      </div>
    </>
  )
}
   
      
        
      
     
      



export default Home;
