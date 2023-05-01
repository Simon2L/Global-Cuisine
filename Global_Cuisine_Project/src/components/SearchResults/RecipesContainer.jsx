import './RecipesContainer.css'
import RecipeCard from "./RecipeCard";
import { useEffect } from 'react';

const RecipesContainer = ({data}) => {
     
  return (
    <>
    <p>{data.length > 0 ? `${data.totalResults} recipes found` : ""}</p>
    <section className="recipe-card-container">
      {data?.results?.map(recipe => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </section>
    </>
  );
};

export default RecipesContainer;