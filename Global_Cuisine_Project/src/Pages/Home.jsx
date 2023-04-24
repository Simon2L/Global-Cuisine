import React from 'react'
import Searchbar from '../components/Searchbar'
import RecipesContainer from '../components/SearchResults/RecipesContainer'


function Home() {
  return (
    <>
      <Searchbar />
      <RecipesContainer />
    </>
  )
}

export default Home