
import './RecipeView.css'
import recipeImage from '../assets/brooke.jpg'
import { useLocation, useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import parse from 'html-react-parser'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from 'react-router-dom'

const Similars = () => {
const params = useParams();
    const [similars, setSimilars] = useState([]);
    const getSimilars = async (id) => {
    const apiKey = 'f27d562bd85b4cd5a482eb0b9108beeb';
    try {
        const url = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${apiKey}`;
        const response = await fetch(url);
        const result = await response.json();               
        setSimilars(result);
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    }
      useEffect(() => {        
        getSimilars(params.recipeId)
    },[params.recipeId])
    return (
        similars ?
        <>
        <h3>Similars:</h3>
                
                    <ul className='list'>
                            {similars.map((similar) =>
                                
                                <li key={similar.id} className='list-element'>
                                    <Link to={"/recipes/" +similar.id}>
                                        {similar.title}</Link></li>
                                
                                
                                
                            )}                        
                        
                        
                    
               
                </ul>
                </> : <></>
    )
}

export default function RecipeView() {
    // const location = useLocation();
    // const data = location.state.recipe;  //gets the recipe object from home page
    const params = useParams();
    console.log(params)
    const [recipe,setRecipe] =useState();
    const getRecipe = async (id) => {
    const apiKey = '27bb6d5c926f4d7a9031e952cb4c9849';
    try {
        const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=true`;
        const response = await fetch(url);
        const result = await response.json();               
        setRecipe(result);
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    }

  

    useEffect(() => {
        getRecipe(params.recipeId)
        //getSimilars(params.recipeId)
    },[params.recipeId])
    //console.log(similar)
    const summary = '<h3>'+recipe?.summary.split('. ',1)+'</h3>'; // splits and saves the first sentence of summary atribute of the recipe
    

        return (
            recipe ?
            <div className="recipe-container">
                <div className='recipe-info'>
                           
                    <div className="title-container"> 
                        <h1>{recipe.title}</h1>
                        <div className='title-info'>                       
                            <div className='image-container'>                   
                            <img src={recipe.image} alt="recipe image" 
                            className='recipe-img' ></img>
                            </div>
                            <div className='summary'>                            
                                <span>{parse(summary)}</span>
                                <div>
                                    <div>
                                        <h5>Time to prepare</h5>
                                        <h4>{recipe.readyInMinutes} minutes</h4>
                                    </div> 
                                    <div>
                                        <h5>Servings</h5>
                                        <h4>{recipe.servings} portions</h4>
                                    </div> 
                                    <div>
                                        <h6>Health score</h6>
                                        <h4 className='last'>{recipe.healthScore} points</h4>
                                    </div>   
                                </div>                            
                            </div>
                        </div> 
                    </div>
                


                <div className="recipe-ingredients"> 
                    <div className='ingredients'>           
                        <h2 className=''>Ingredients : </h2> 
                        <hr className='solid' />           
                    <div>
                        <ul className='list'>
                            {recipe.extendedIngredients.map((ingredient) =>
                                <li key={ingredient.id} className='list-element'>{ingredient.original}</li>
                            )}                        
                        </ul>
                        </div>
                        </div>
                    <div className='instructions' >            
                        <h2 className=''>Instructions : </h2> 
                        <hr className='solid' />            
                    <div>
                        <ol className='list'>
                            {recipe.analyzedInstructions.map((instruction,index) => {
                                return <div key={index} >
                                    {instruction.steps.map((step) => <li key={step.number}>
                                        <span>{step.step}</span></li>)}
                                </div>
                                
                            } 
                            )}                        
                        </ol>
                    </div>
                </div>                
            </div>
            <div className='recipe-ingredients'>
                <Similars props={recipe.id}></Similars>
                
            </div>
            
            </div> 
            <div>
                <div className="nutrition-info">
                    <h3 className='nutrition-title'>Nutritions Facts : </h3>
                    <hr className='solid'></hr>                    
                    <p className="serving">Serving size : <span>
                        {recipe.nutrition.weightPerServing.amount}{recipe.nutrition.weightPerServing.unit}</span></p>
                        <hr className="light"/>
                        <p className="caloric">Caloric breakdown: </p>
                        <div className="caloricinfo">
                        <p>Carbs: <span>
                        {recipe.nutrition.caloricBreakdown.percentCarbs}%</span></p>
                        <p>Fat: <span>
                        {recipe.nutrition.caloricBreakdown.percentFat}%</span></p>
                        <p>Protein: <span>
                        {recipe.nutrition.caloricBreakdown.percentProtein}%</span></p>
                        </div>
                        <hr className="light"/>
                        <div className="nutrients">
                        {recipe.nutrition.nutrients.map((nutrient,index) => <p key={index} className="nutrient">{nutrient.name}: <span>
                        {nutrient.amount}{nutrient.unit}</span></p> )}
                        </div>
                        
                    
                  
                 </div>  
                 {/* <div className='nutrition-info'>
                    <h4>This meal goes with :</h4>
                    {}
                    </div>  */}
                </div>
            </div> : <></>
            
        )
   
}