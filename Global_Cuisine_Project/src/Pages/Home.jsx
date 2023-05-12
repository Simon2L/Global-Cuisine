import React, { useEffect } from 'react'
import Searchbar from '../components/Searchbar'
import RecipesGeo from '../components/RecipesGeolocation/RecipesGeo'
import RecipesContainer from '../components/SearchResults/RecipesContainer'
import { useState } from 'react';
import {useRef} from 'react';
import './Home.css'

function Home() {
  const [recipes, setRecipes] = useState([]);
  const ref = useRef(null)

  useEffect(() => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  },[recipes])
  
  return (
    <>
      <Searchbar setRecipes={setRecipes} />
      <RecipesGeo />
      <div ref={ref}>
        <RecipesContainer data={recipes} />
      </div>
      <h1 id="zero-state">
      EMPTY PAGE.
      <br />
      
    </h1>
    </>
  )
}
     



export default Home;
