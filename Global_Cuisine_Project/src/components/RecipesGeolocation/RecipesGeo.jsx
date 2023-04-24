import React, { useEffect, useState } from 'react'
import './RecipesGeo.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";


export default function GetCoordinates() {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [country, setCountry] = useState(null);
    const [continent, setContinent] = useState(null);
    const [city, setCity] = useState(null);
    const [status, setStatus] = useState(null);
    const [recipesRegion, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    let region = "";
    const Nordic = ["SE", "FI", "NO", "DK", "IS"]
    const [currentRegion, setRegion] = useState(null);
    
    

useEffect(() => {


      
    const getLocation = async () => {
        if(!navigator.getLocation) {
            setStatus("Geolocation not working")
        } else {
            setStatus("Loading...");
        }
    
        navigator.geolocation.getCurrentPosition((position) => {
            setStatus(null);
            setLat(position.coords.latitude);
            setLng(position.coords.longitude)
          
        }),
        () => {
            setStatus("Unable to retrieve your location")
        }
        
               const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
        
               const resp = await fetch(geoApiUrl);
               const data = await resp.json();
               
            
                setContinent(data.continent)
                setCountry(data.countryCode)
                setCity(data.city)

                const continentTemp = data.continent;
                const countryTemp = data.countryCode;


switch (continentTemp) {
    case 'Europe':
        if(Nordic.includes(countryTemp)) {
          setRegion("Nordic")
          region = "Nordic"
        }
        else {
          setRegion("European") 
          region = "European"
        }
        break;
      case 'North America':
          setRegion("American")
          region = "American"
          break;
      case 'Africa':
          setRegion("African")
          region = "African"
        break;
        case 'South America':
          setRegion("Latin American")
          region = "Latin American"
        break;
        case 'Asia':
          setRegion("Chinese")
          region = "Chinese"
        break;
        case 'Australian continent':
          setRegion("Thai")
        break;
      default:
        console.log(`something went wrong`);
    }
        

    const dataRec = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=464af0a5c0304561ad1a51dbe015d0c4&cuisine=${"European"}`);
    const recipes = await dataRec.json();
    console.log(recipes)
    setRecipes(recipes)
    setLoading(false)
        


    }
 
    getLocation()

  }, [currentRegion])


  return (
    <>
    <hr></hr>
    <h1>based on your location. here is some {currentRegion} recipes for you</h1>
    <div className='RecipeCards'>
    <Splide options={{
      perPage: 5,
      arrows: false,
      drag: 'free',
      pagination: false,
    }}>

    {loading ? <h1>Loading...</h1> : recipesRegion.results.map(item => {
      return(
        
    
          <SplideSlide >
          <div className='Card' key={item.id}>
          <img src={item.image}></img>
          <h1 >{item.title}</h1>
          </div>
          </SplideSlide>
     
   
     )
   }) }
  
    </Splide>
    </div>

   
   </>
 )
}

     

    

