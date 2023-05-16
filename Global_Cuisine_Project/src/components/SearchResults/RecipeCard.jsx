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
