import './RecipeCard.css'
import { Link
} from "react-router-dom";


const RecipeCard = (props) => {
    return (
      <div className="recipe-card">
          <Link to={"recipes/" + props.recipe.id}>
            <img src={props.recipe.image} alt="Recipe Image" ></img>
            <div className="vegantag">
              <div><h3>{props.recipe.vegan ? <Vegan /> : <p></p>}</h3></div>
            </div>
            <div className="text-container">
              <h1>{props.recipe.title}</h1>
            </div>
          </Link>
          <div className="tags">
              {/* <h3>{props.recipe.vegan ? <Vegan /> : <p></p>}</h3> */}
              <div><p>Ready in </p>{props.recipe.readyInMinutes} minutes</div>
          </div>
        </div>
    );
  };
  
  export default RecipeCard;


  const Vegan =() => {
    return <p>Vegan</p>
  }

  // const ReadyIn =() => {
  //   return <p>Ready in +{props.recipe.readyInMinutes}</p>
  // }