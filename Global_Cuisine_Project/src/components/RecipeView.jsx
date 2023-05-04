
import './RecipeView.css'
import recipeImage from '../assets/brooke.jpg'
import { useLocation, useParams } from 'react-router-dom'
import { useState,useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from 'react-router-dom'

const Similars = () => {
const params = useParams();
    const [similars, setSimilars] = useState([]);
    const getSimilars = async (id) => {
    const apiKey = 'e2c73c94740044a697df0291dcb3ff7f';
    try {
        const url = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${apiKey}`;
        const response = await fetch(url);
        const result = await response.json();               
        setSimilars(result);        
      } catch (e) {
        console.log(e);
      }
    }
      useEffect(() => {        
        getSimilars(params.recipeId)
    },[])
    return (
        similars ?
        <>
        <h3>Similars Recipes:</h3>
                
                    <ul className='list'>
                            {similars.map((similar) =>
                                
                                <li key={similar.id} >
                                    <Link to={"/recipes/" + similar.id} reloadDocument className='similar'>
                                        {similar.title}</Link></li>                          
                          )}                        
              </ul>
                </> : <></>
    )
}

const Wines = ({props}) => {
    if(Object.keys(props).length === 0 || props.pairingText === '')
    return(
        <></>
    )
    else
        return (
        props ?
        <div className='wine-container'>
        <h2>Wine recommendation:</h2>
        <h4>{props.pairingText} </h4>                      
                    <ul className='list'>
                            {props.productMatches.map((wine) =>                                
                                <div key={wine.id} className='wineCard'>                                    
                                        <img src={wine.imageUrl} alt="wine"></img>
                                        <a href={wine.link} target='_blank' className='wineLink'>{wine.title}</a>                                                             
                                </div>    
                        )}                        
              </ul>
               </div> : <></>
    )
}

export default function RecipeView() {
    
    const params = useParams();   
    const [recipe,setRecipe] =useState();
    const [wineList, setWineList] = useState();
    const getRecipe = async (id) => {
    const apiKey = 'e2c73c94740044a697df0291dcb3ff7f';
    try {
        const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=true`;
        const response = await fetch(url);
        const result = await response.json();               
        setRecipe(result);
        setWineList(result.winePairing) 
        console.log(result)       
      } catch (e) {
        console.log(e);
      }
    }

  

    useEffect(() => {
        getRecipe(params.recipeId)       
    },[])    
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
            <Wines props={wineList} />
            
            </div> 
            <div className='aside'>
                <div className="nutrition-info" >
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
                 <div className='nutrition-info'>
                    <Similars className="similars"></Similars>
                 </div>
                 
                </div>
            </div> : <></>
            
        )
   
}