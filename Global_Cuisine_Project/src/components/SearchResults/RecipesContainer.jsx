
import RecipeCard from "./RecipeCard";

const RecipesContainer = (props) => {
  return (
    <div>
      {props.recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipesContainer;