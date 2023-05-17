import React, { useEffect, useState } from 'react'
import './RecipesGeo.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import getUserRegion from './Functions/GetUserRegion';
import GetUserCoordinates from './Functions/GetUserCoordinates';
import GetUserLocation from './Functions/GetUserLocation';
import GetRecipes from './Functions/GetRecipes';
import {ClipLoader} from 'react-spinners'


export default function LocationRecipes() {
    const [recipesRegion, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true)
    const [userRegion, setRegion] = useState(null);
    const [totalRecipes, setTotal] = useState(null);
    
    useEffect(() => {
      LoadRecipes()
    }, [])




    const LoadRecipes = async () => {
      const latLng = await GetUserCoordinates() 
      const location = await GetUserLocation(latLng[0], latLng[1])  // hämtar användarens land och kontinent
      const tempRegion = await getUserRegion(location[0], location[1]) // matchar vilken region användaren är vid
      const tempRecipes = await GetRecipes(tempRegion) 
      // console.log(tempRecipes)
      
      setRecipes(tempRecipes[0])  // tempRecipes[0] är dem hämtade recepten
      setLoading(tempRecipes[1])  // tempRecipes[1] är false om allt lyckades att hämtas
      setRegion(tempRegion) // så man kan skriva ut vilken region användaren är vid
      setTotal(tempRecipes[0].results.length) // visar antal hämtade recept, max 50(kan ändras)
    }

   




  return (
    <>
      <div className='textBox'>
        <h1 className='h1Location'><i style={iStyle}>{totalRecipes} {userRegion}</i> recipes just for you:</h1>
      </div>
      <div className='RecipeCards'>
        {/* sättter upp splide options som hur många cards som ska visas etc */}
        <Splide options={{
          perPage: 5,
          breakpoints: { // bestämmer hur många kort som visas beroende på window size
            1800: {
            perPage: 4,
          },
            1400: {
            perPage: 3,
          },
            1000: {
            perPage: 2,
          },
            400: {
            perPage: 1,
          },
        },
          pagination: false,
          drag: 'free',
        }}>

        {loading ? <ClipLoader className='loader' /> : recipesRegion.results.map(recipe => { // för varje hämtad recipes, görs det kort
          return(
            // en del av splide som gör att slidsen fungerar
            <SplideSlide key={recipe.id}>   
              <div className='Card'>
                <Link style={linkStyle} to={`recipes/${recipe.id}`}>
                  <img src={recipe.image}></img>
                  <div className='textContainer'>
                    <h1>{recipe.title}</h1>
                  </div>
                </Link>
              </div>
            </SplideSlide>
          )
        })}
      

        </Splide>
      </div>
    </>
  )
}

//#region små styling som inte behövs vara i en css fil
const linkStyle = {
  textDecoration: "none",
  color: 'black'
};
   
     
const iStyle = {
  color: "#743737"
};

//#endregion

     

    

