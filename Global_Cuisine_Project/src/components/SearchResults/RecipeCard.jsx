import './RecipeCard.css'
import { Link
} from "react-router-dom";
import ImageCheck from '../ImageCheck';
import comingSoon from '../coming-soon.png'


const RecipeCard = (props) => {
    return (
        <div className="recipe-card">
          <Link to={"recipes/" + props.recipe.id}>
            <img src={ImageCheck(props.recipe)? props.recipe.image : comingSoon} alt="recipe"></img>          
           <div className="text-container">
          <h1>{props.recipe.title}</h1>
          </div>
          </Link>
        </div>
    );
  };
  
  export default RecipeCard;
