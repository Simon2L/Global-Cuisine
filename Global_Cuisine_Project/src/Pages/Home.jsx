import React, { useEffect } from 'react'
import Searchbar from '../components/Searchbar'
import RecipesGeo from '../components/RecipesGeolocation/RecipesGeo'
import RecipesContainer from '../components/SearchResults/RecipesContainer'
import { useState } from 'react';
import {useRef} from 'react';
import './Home.css'

function Home() {
  const [recipes, setRecipes] = useState([]);
  const optionsTemplate = { // hur options ser ut innan några värden har valts
    region: [],
    mealtype: [],
    diet: [],
    intolerance: [],
  }

  const [options, setOptions] = useState(optionsTemplate);
  const ref = useRef(null)

  useEffect(() => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  },[recipes])
  
  return (
    <>
      <Searchbar setRecipes={setRecipes} setOptions={setOptions} options={options}/>
      <RecipesGeo />
      <div ref={ref} className='searchResultContainer'>
        <RecipesContainer data={recipes} />
        <button className='loadBtn'>Load more</button>
      </div>
    </>
  )
}
     



export default Home;
