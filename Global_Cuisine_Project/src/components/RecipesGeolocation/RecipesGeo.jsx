import React, { useEffect, useState } from 'react'
import './RecipesGeo.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import getUserRegion from './Functions/GetUserRegion';
import GetUserCoordinates from './Functions/GetUserCoordinates';
import GetUserLocation from './Functions/GetUserLocation';
import GetRecipes from './Functions/GetRecipes';


export default function LocationRecipes() {
    const [recipesRegion, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userRegion, setRegion] = useState(null);
    const [totalRecipes, setTotal] = useState(null);
    
    useEffect(() => {

    LoadRecipes()
    }, [])



    const LoadRecipes = async () => {
      const latLng = await GetUserCoordinates()
      const location = await GetUserLocation(latLng[0], latLng[1])
      const tempRegion = await getUserRegion(location[0], location[1])
      const tempRecipes = await GetRecipes(tempRegion)
      console.log(tempRecipes)
      
      setRecipes(tempRecipes[0])  // tempRecipes[0] är dem hämtade recepten
      setLoading(tempRecipes[1])  // tempRecipes[1] är false om allt lyckades att hämtas
      setRegion(tempRegion)
      console.log(tempRecipes[0].results.length)
      setTotal(tempRecipes[0].results.length)
    }

   




  return (
    <>
    <hr></hr>
    <h1 className='h1Location'><i style={iStyle}>{totalRecipes} {userRegion}</i> recipes just for you:</h1>
    <div className='RecipeCards'>
    {/* sättter upp alla splide options som hur många cards som ska visas etc */}
    <Splide options={{
      perPage: 5,
      breakpoints: { // bestämmer hur många kort som visas beroende på window size
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
    }}>

    {loading ? <h1>Loading...</h1> : recipesRegion.results.map(item => { // för varje hämtad recipes, görs det kort
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
    })}

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

     

    

