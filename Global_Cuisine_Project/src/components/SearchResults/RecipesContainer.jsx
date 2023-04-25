import './RecipesContainer.css'
import RecipeCard from "./RecipeCard";

const RecipesContainer = (props) => {
  return (
    <section className="recipe-card-container">
      {props.recipes.map(recipe => (
        <RecipeCard recipe={recipe} />
      ))}
    </section>
  );
};

export default RecipesContainer;