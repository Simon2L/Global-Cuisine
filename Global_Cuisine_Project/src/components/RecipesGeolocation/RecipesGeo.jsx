import React, { useEffect, useState } from 'react'
import './RecipesGeo.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import Region from './Region';


export default function GetCoordinates() {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);
    const [recipesRegion, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    let tempRegion = "";
  
    const [currentRegion, setRegion] = useState(null);
    
    

useEffect(() => {


      
    const getLocation = async () => {
      
  //#region hämtar koordinaterna
        navigator.geolocation.getCurrentPosition((position) => {
            setStatus("");
            setLat(position.coords.latitude);
            setLng(position.coords.longitude)
        }),
        () => {
            setStatus("Unable to retrieve your location")
        }
//#endregion
        
//#region tar fram var i världen man är mha av lat och long
               const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
        
               const resp = await fetch(geoApiUrl);
               const data = await resp.json();
              // console.log(data)
              const continentTemp = data.continent;
              const countryTemp = data.countryCode;
//#endregion

             

             
//#region  matchar vilken region användaren är vid
        tempRegion = (Region(continentTemp, countryTemp))
        setRegion(Region(continentTemp, countryTemp))
//#endregion
                
//#region hämtar recept enligt vilken region användaren är på, om den inte hittar region så blir tempRegion tom
    const dataRec = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ca9ea86f4b914c5e8ff1f83332e8378c&cuisine=${tempRegion}`);
    const recipes = await dataRec.json();
    setRecipes(recipes)
    setLoading(false)
//#endregion        


    }
 
    getLocation() // startar i gång funktionen som hämtar location och recept

  }, [currentRegion])


  return (
    <>
    <hr></hr>
    <h1 className='h1Location'><i style={iStyle}>{currentRegion}</i> recipes just for you: {status}</h1>
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

     

    

