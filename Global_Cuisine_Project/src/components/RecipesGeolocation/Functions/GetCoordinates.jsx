import React from 'react'

function GetCoordinates() {
    let lat;
    let lng;
    let getStatus;

    navigator.geolocation.getCurrentPosition((position) => {
        getStatus = ""
        lat = position.coords.latitude
        lng = position.coords.longitude
    }),
    () => {
        coordStatus = "Unable to retrieve your location"
    }
  return (
        [lat, lng, getStatus]
  )
}

export default GetCoordinates