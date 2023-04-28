
import './RecipeView.css'
import recipeImage from '../assets/brooke.jpg'
import { useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react';
import parse from 'html-react-parser'


export default function RecipeView() {
    const location = useLocation();
    const data = location.state.recipe;  //gets the recipe object from home page
    const summary = '<h3>'+data.summary.split('. ',1)+'</h3>'; // splits and saves the first sentence of summary atribute of the recipe
    

    const [similar, setSimilars] = useState([]);
    const getSimilars = async (id) => {
    const apiKey = '27bb6d5c926f4d7a9031e952cb4c9849';
    try {
        const url = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=${apiKey}`;
        const response = await fetch(url);
        const result = await response.json();               
        setSimilars(result.results);
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    }

    useEffect(() => {
        getSimilars(data.id)
    },[])
    console.log(similar)

        return (
            
            <div className="recipe-container">
                <div className='recipe-info'>
                           
                    <div className="title-container"> 
                        <h1>{data.title}</h1>
                        <div className='title-info'>                       
                            <div className='image-container'>                   
                            <img src={data.image} alt="recipe image" 
                            className='recipe-img' ></img>
                            </div>
                            <div className='summary'>                            
                                <span>{parse(summary)}</span>
                                <div>
                                    <div>
                                        <h5>Time to prepare</h5>
                                        <h4>{data.readyInMinutes} minutes</h4>
                                    </div> 
                                    <div>
                                        <h5>Servings</h5>
                                        <h4>{data.servings} portions</h4>
                                    </div> 
                                    <div>
                                        <h6>Health score</h6>
                                        <h4 className='last'>{data.healthScore} points</h4>
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
                            {data.extendedIngredients.map((ingredient) =>
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
                            {data.analyzedInstructions.map((instruction,index) => {
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
            </div> 
                <div className="nutrition-info">
                    <h2>Nutritions Facts : </h2>
                    <hr className='solid'></hr>                    
                    <p className="serving">Serving size : <span>
                        {data.nutrition.weightPerServing.amount}{data.nutrition.weightPerServing.unit}</span></p>
                        <hr className="light"/>
                        <p className="caloric">Caloric breakdown: </p>
                        <div className="caloricinfo">
                        <p>Carbs: <span>
                        {data.nutrition.caloricBreakdown.percentCarbs}%</span></p>
                        <p>Fat: <span>
                        {data.nutrition.caloricBreakdown.percentFat}%</span></p>
                        <p>Protein: <span>
                        {data.nutrition.caloricBreakdown.percentProtein}%</span></p>
                        </div>
                        <hr className="light"/>
                        <div className="nutrients">
                        {data.nutrition.nutrients.map((nutrient) => <p className="nutrient">{nutrient.name}: <span>
                        {nutrient.amount}{nutrient.unit}</span></p> )}
                        </div>
                        
                    
                    <div >
                        <ul>
                              {/* {data.}   */}
                            </ul>
                    </div>
                    
                </div>
            </div>
            
        )
   
}