
import './RecipeView.css'
import recipeImage from '../assets/brooke.jpg'
import { useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react';
import parse from 'html-react-parser'


export default function RecipeView() {
    const location = useLocation();
    const data = location.state.recipe;  //gets the recipe object from home page
    const summary = '<h3>'+data.summary.split('. ',1)+'</h3>'; // splits and saves the first sentence of summary atribute of the recipe
    

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
                    <p>Serving size :<span>
                        {data.nutrition.weightPerServing.amount}{data.nutrition.weightPerServing.unit}</span></p>
                    
                    
                    <div >
                        <ul>
                              {/* {data.}   */}
                            </ul>
                    </div>
                </div>
            </div>
            
        )
   
}