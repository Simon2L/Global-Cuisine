import './RecipesContainer.css'
import RecipeCard from "./RecipeCard";

const RecipesContainer = (props) => {
  return (
    <section className="recipe-card-container">
      {props.recipes.map(recipe => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </section>
  );
};

export default RecipesContainer;