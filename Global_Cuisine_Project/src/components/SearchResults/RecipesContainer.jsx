import './RecipesContainer.css'
import RecipeCard from "./RecipeCard";
import { useEffect } from 'react';

const RecipesContainer = ({data, total}) => {

  console.log(data);
  
  return (
    <>
      <h1 className='total-result'><i className='total-number'>{total}</i>{total > 0 ? ` recipes found` : ""}</h1>      
      <section className="recipe-card-container">
      {data.map(recipe => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </section>
    </>
  );
};

export default RecipesContainer;