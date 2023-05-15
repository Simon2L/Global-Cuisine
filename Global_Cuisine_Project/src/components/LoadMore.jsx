import React from 'react'
import './LoadMore.css'
import getRecipes from './SearchResults/functions/getRecipes'

function LoadMore({recipes, setRecipes, offset, setOffSet, search, options}) {

    const onLoadMore = async () => {
        console.log("Hello")
        let oldRecipesList = recipes
        let moreRecipes = await getRecipes(search, options, offset)
        setRecipes(oldRecipesList.concat(moreRecipes.results))
        setOffSet(offset + 20)
      }
    
  return (
    <div className='searchResultContainer'>
    <p>{offset} recipes loaded</p>
    <button className='loadBtn' onClick={() => onLoadMore()}>Load more</button> 
  </div>
  )
}

export default LoadMore