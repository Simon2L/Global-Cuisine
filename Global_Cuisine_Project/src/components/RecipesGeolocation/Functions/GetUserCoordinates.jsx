import React from 'react'

export default async function GetUserCoordinates() {
    let lat;
    let lng;
    let getStatus;
    
    navigator.geolocation.getCurrentPosition((position) => {
        getStatus = ""
        lat = position.coords.latitude
        lng = position.coords.longitude
    }),
    () => {
        getStatus = "Unable to retrieve your location"
    }
  return (
        [lat, lng, getStatus]
  )
}

