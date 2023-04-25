

const RecipeCard = (props) => {
    return (
      <>
        {props.recipe ? <h1>{props.recipe.title}</h1> : <h1>null</h1>}
      </>
    );
  };
  
  export default RecipeCard;