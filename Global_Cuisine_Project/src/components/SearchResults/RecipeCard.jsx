import './RecipeCard.css'
import { Link
} from "react-router-dom";


const RecipeCard = (props) => {
    return (
      <div className="recipe-card">
          <Link to={"recipes/" + props.recipe.id}>
            <div>
              <img src={props.recipe.image} alt="Recipe Image"  ></img>
            </div>
            <div className="tagposition">
              {props.recipe.vegan ? <Vegan /> : <p></p>}
              {props.recipe.glutenFree ?  <p></p> : <Gluten />}
            </div>
            <div className="text-container">
              <h1>{props.recipe.title}</h1>
            </div>
          </Link>
          <div className="tags"> 
              <div><p>Ready in: {props.recipe.readyInMinutes} minutes</p></div>
          </div>
        </div>
    );
  };
  
  export default RecipeCard;

/*V--Dessa är taggarna i kortet--V*/

  const Vegan =() => {
    return (
      <>
        <div className="vegantag">
          <p >Vegan</p>
        </div>
      </> 
    );
  
   
  }

  const Gluten =() => {
    return (
      <>
        <div className="glutentag">
          <p>Gluten</p>
        </div>
      </>
    );
  }
