import './RecipeCard.css'
import { Link
} from "react-router-dom";


const RecipeCard = (props) => {
    return (
      <div className="recipe-card">
          <Link to={"recipes/" + props.recipe.id}>
            <img src={props.recipe.image} alt="Recipe Image" ></img>
           
              {props.recipe.vegan ? <Vegan /> : <p></p>}
              {/* {props.recipe.glutenFree ? <Gluten /> : <p></p>} */}
              {props.recipe.glutenFree ?  <p></p> : <Gluten />}
          
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

  // const ReadyIn =() => {
  //   return <p>Ready in +{props.recipe.readyInMinutes}</p>
  // }