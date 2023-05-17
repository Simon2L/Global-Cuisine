import './RecipesContainer.css'
import RecipeCard from "./RecipeCard";
import { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';


const RecipesContainer = ({data}) => {

  console.log(data);
  
  return (
    data?
    <>
      <h1 className='total-result'><i className='total-number'>{data.totalResults}</i>{data.totalResults > 0 ? ` recipes found` : ""}</h1>      
      <section className="recipe-card-container">  
       {data.results?.map(recipe => (       
        <RecipeCard recipe={recipe} key={recipe.id} />    
      ))}
    </section>
    </> : <ClipLoader className='search-loader' />
  );
};

export default RecipesContainer;