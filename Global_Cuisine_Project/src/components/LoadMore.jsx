import React from 'react'
import './LoadMore.css'
import getRecipes from './SearchResults/functions/getRecipes'

function LoadMore({recipes, setRecipes, offset, setOffSet, search, options}) {

    const onLoadMore = async () => {
        let oldRecipesList = recipes
        let moreRecipes = await getRecipes(search, options, offset)
        setRecipes(oldRecipesList.concat(moreRecipes.results))
        setOffSet(offset + 24)
      }
    
  return (
    <div className='searchResultContainer'>
      <button className='loadBtn' onClick={() => onLoadMore()}>Load more</button> 
    </div>
  )
}


export default LoadMore