import React, { useEffect } from 'react'
import Searchbar from '../components/Searchbar'
import RecipesGeo from '../components/RecipesGeolocation/RecipesGeo'
import RecipesContainer from '../components/SearchResults/RecipesContainer'
import { useState } from 'react';
import {useRef} from 'react';
import './Home.css'
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
    if(offset === 24) ref.current?.scrollIntoView({behavior: 'smooth', block: "start"});
  },[recipes])
  


    
  
  return (
    <>
      <Searchbar setRecipes={setRecipes} setOptions={setOptions} options={options} search={search} setSearch={setSearch} setOffSet={setOffSet} setTotalRecipes={setTotalRecipes}/>
      <BackToTopBtn />
      <RecipesGeo />
      <div ref={ref} >
        <RecipesContainer data={recipes} total={totalRecipes} />
        {totalRecipes > 0 && totalRecipes > offset ? // visas inte om inga recept har laddats fram än eller om den totala är mindre än 24
        <div className='LoadMoreContainer'>
          <p className='textLoadedRecipes'>{recipes.length}/{totalRecipes} recipes</p>
          <LoadMore recipes={recipes} setRecipes={setRecipes} offset={offset} setOffSet={setOffSet} search={search} options={options}/>
          
        </div>

        : <></>}
      </div>
    </>
  )
}
   
const BackToTopBtn = () => {
  let myButton = document.getElementById("top-btn")

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
  }

  function scrollFunction() {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){

      myButton.style.display = "block";
    }
    else {
      myButton.style.display = "none";
    }
    
  }

  window.onscroll = () => {
    scrollFunction()
  }

  return (
    <button id="top-btn" onClick={() => topFunction()}>Back to top</button>
    
  )
}      
        

export default Home;
