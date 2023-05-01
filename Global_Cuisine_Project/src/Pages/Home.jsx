import React from 'react'
import Searchbar from '../components/Searchbar'
import RecipesGeo from '../components/RecipesGeolocation/RecipesGeo'
import RecipesContainer from '../components/SearchResults/RecipesContainer'
import { useState } from 'react';

function Home() {
  const [recipes, setRecipes] = useState([]);
  return (
    <>
      <Searchbar setRecipes={setRecipes} />
      <RecipesContainer recipes={recipes} />
      <RecipesGeo />
     

    </>
  )
}


export default Home;
