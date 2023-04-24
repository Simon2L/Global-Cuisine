import React from 'react'
import Searchbar from '../components/Searchbar'
import RecipesGeo from '../components/RecipesGeolocation/RecipesGeo'



export default function Home() {
  return (
    <>
      <Searchbar />
      <RecipesGeo />
    </>
  )
}

