import './RecipesContainer.css'
import RecipeCard from "./RecipeCard";
import { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';


const RecipesContainer = ({data, total}) => {

  console.log(total);
  
  return (
    data?
    <>
      <div className='textBox'>
        <h1 className='total-result'><i className='total-number'>{total}</i>{total > 0 ? ` recipes found` : ""}</h1>
      </div>
      <section className="recipe-card-container">
      {data.map(recipe => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </section>
    </> : <ClipLoader className='search-loader' />
  );
};
        

export default RecipesContainer;
      