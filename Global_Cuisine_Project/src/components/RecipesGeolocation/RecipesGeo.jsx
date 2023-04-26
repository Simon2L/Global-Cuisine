import React, { useEffect, useState } from 'react'
import './RecipesGeo.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import getRegion from './Functions/GetRegion';
import GetCoordinates from './Functions/GetCoordinates';


export default function LocationRecipes() {
    const [latLng, setLatLng] = useState([]);
    const [status, setStatus] = useState(null);
    const [recipesRegion, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    let tempRegion = "";
  
    const [currentRegion, setRegion] = useState(null);
    
         
    const GeoRecipes = async () => {
      
//#region hämtar koordinaterna med getCoordinates funktionen
      setLatLng(GetCoordinates()) 
      console.log(latLng[0] + latLng[1] + latLng[2])
    //#endregion
            
    //#region tar fram var i världen man är mha av lat och long
            const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latLng[0]}&longitude=${latLng[1]}&localityLanguage=en`
    
                   const resp = await fetch(geoApiUrl);
                   const data = await resp.json();
                  console.log(data)
                  const continentTemp = data.continent;
                  const countryTemp = data.countryCode;
    //#endregion
    
                 
    
                 
    //#region  matchar vilken region användaren är vid
            tempRegion = (getRegion(continentTemp, countryTemp))
            setRegion(getRegion(continentTemp, countryTemp))
    //#endregion
                    
    //#region hämtar recept enligt vilken region användaren är på, om den inte hittar region så blir tempRegion tom
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
      

  useEffect(() => {
    GeoRecipes() // startar i gång funktionen som hämtar location och recept
  }, [])


  return (
    <>
    <hr></hr>
    <h1 className='h1Location'><i style={iStyle}>{currentRegion}</i> recipes just for you: {latLng[2]}</h1>
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

     

    

