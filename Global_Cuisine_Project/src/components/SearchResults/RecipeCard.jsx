import './RecipeCard.css'
import { Link
} from "react-router-dom";


const RecipeCard = (props) => {
    return (
        <div className="recipe-card">
          <Link to={"recipes/" + props.recipe.id}>
          <img src={props.recipe.image} alt="Recipe Image"></img>
          <div className="text-container">
          <h1>{props.recipe.title}</h1>
          </div>
          </Link>
        </div>
    );
  };
  
  export default RecipeCard;
