
export default async function GetUserLocation(lat, lng) {
  let continent
  let country
try {
  const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
  const resp = await fetch(geoApiUrl);
  const data = await resp.json();
    
    // console.log(data)
      continent = data.continent;
      country = data.countryCode;
} catch (error) {
  console.log("could not get user location, Error:" + error )
}

  return (
    [continent, country]
  )
}