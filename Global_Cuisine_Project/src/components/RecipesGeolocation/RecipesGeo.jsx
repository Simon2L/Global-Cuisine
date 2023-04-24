import React, { useState } from 'react'


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
        

    const dataRec = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=7c540f2e3dce4ed3b30794aeb0a5789e&cuisine=${region}`);
    const recipes = await dataRec.json();
    console.log(recipes)
    setRecipes(recipes)
    setLoading(false)
        


    }





  return (
    <>
    <h1>Status: {status}</h1>
    <hr></hr>
    <button className='myBtn' onClick={() => getLocation()}>Get my location</button>
    <h2><ins>Continent</ins>: <i>{continent}</i></h2>
    <h2><ins>Country</ins>: <i>{country}</i></h2>
    <h2><ins>City</ins>: <i>{city}</i></h2>
    <h3>lat: {lat}</h3>
    <h3>long: {lng}</h3>
    <h1>Based on your location your local recipes should be</h1>
    <h1 style={textstyle}>{currentRegion}</h1>
    <div></div>
    {loading ? <h1>Loading...</h1> : recipesRegion.results.map(item => {
      return(
        <div key={item.id}>
          <h1 >{item.title}</h1>
          <img src={item.image}></img>
        </div>
     )
   }) }
   </>
 )
}
     

    
const textstyle = {
    color: "green"
}

    

