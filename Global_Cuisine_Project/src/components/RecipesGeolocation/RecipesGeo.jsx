import React, { useEffect, useState } from 'react'
import './RecipesGeo.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import getUserRegion from './Functions/GetUserRegion';
import GetUserCoordinates from './Functions/GetUserCoordinates';
import GetUserLocation from './Functions/GetUserLocation';


export default function LocationRecipes() {
    const [latLng, setLatLng] = useState([]);
    const [status, setStatus] = useState(null);
    const [recipesRegion, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    let tempRegion = "";
    const [userLocation, SetUserLoc] = useState([]);
    const [currentRegion, setRegion] = useState(null);
    
    useEffect(() => {
    LoadRecipes()
    }, [])
    const LoadRecipes = async () => {
      let lat = await GetUserCoordinates()
      let loc = await GetUserLocation(lat[0], lat[1])
      let reg = await getUserRegion(loc[0], loc[1])
      await getGeoRecipes(reg)
      // startar i gång funktionen som hämtar location och recept
      console.log(loc)
      console.log(reg)
    }

    const getGeoRecipes = async (tempRegion) => {
            try {
    const check = localStorage.getItem('recipesGeo');
    if(check){
      setRecipes(JSON.parse(check))
      console.log("no api fetch needed")
      setLoading(false)
    }
    else {
      const tempApiKey = "5303c07f7ada44cfb627489c597befb7"
      const dataRec = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${tempApiKey}&cuisine=${tempRegion}&&addRecipeInformation=true&addRecipeNutritionaddRecipeNutrition=true`);
      const recipes = await dataRec.json();
      console.log(recipes)
      localStorage.setItem('recipesGeo', JSON.stringify(recipes))
      setRecipes(recipes)
      setLoading(false)
    }
  }
  catch (error) {
  console.error(error);
}

    //#endregion        
    
    
        }
      




  return (
    <>
    <hr></hr>
    <h1 className='h1Location'><i style={iStyle}>{currentRegion}</i> recipes just for you: {tempRegion}</h1>
    <div className='RecipeCards'>
    {/* sättter upp alla splide options som hur många cards som ska visas etc */}
    <Splide options={{
      perPage: 5,
      breakpoints: {
        1730: {
          perPage: 4,
        },
        1300: {
          perPage: 3,
        },
        800: {
          perPage: 2,
        },
        400: {
          perPage: 1,
        },
      },
      arrows: false,
      drag: 'free',
      pagination: false,
      type: 'loop'
    }}>

    {loading ? <h1>Loading...</h1> : recipesRegion.results.map(item => {
      return(
        // en del av splide som gör att slidsen fungerar
        <SplideSlide key={item.id}>   
        <div className='Card'>
          <Link style={linkStyle} to={`recipes/${item.id}`}>
        <img src={item.image}></img>
        <hr></hr>
        <h1 >{item.title}</h1>
        </Link>
        </div>
        </SplideSlide>
   )
 }) }

  </Splide>
  </div>
  <hr></hr>
 </>
)
}

//#region små styling som inte behövs vara i en css fil
const linkStyle = {
  textDecoration: "none",
  color: 'black'
};
   
     
const iStyle = {
  color: 'black'
};

//#endregion

     

    

