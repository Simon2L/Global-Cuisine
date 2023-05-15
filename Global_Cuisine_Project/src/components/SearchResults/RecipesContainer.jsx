import './RecipesContainer.css'
import RecipeCard from "./RecipeCard";

const RecipesContainer = ({data, total}) => {

  console.log(total);
  
  return (
    <>
      <div className='textBox'>
        <h1 className='total-result'><i className='total-number'>{total}</i>{total > 0 ? ` recipes found` : ""}</h1>
      </div>
      <section className="recipe-card-container">
      {data.map(recipe => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </section>
    </>
  );
};
        

export default RecipesContainer;
      