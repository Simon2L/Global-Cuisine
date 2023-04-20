
import './RecipeView.css'
import recipeImage from '../assets/brooke.jpg'
import { useState, useEffect } from 'react';

function ShowRecipeInfo() {
    return (  
       <>
        <div className='recipe-info'>        
            <div className="recipe-title">
                <h2>Recipe Title</h2>  
                </div>          
                <div className='recipe-title'>
                    <img src={recipeImage} alt="recipe image" 
                    className='recipe-img' ></img>
                </div>
            
            <div className="recipe-title">            
                    <h3 className='title'>Ingredients : </h3> 
                    <hr className='solid' />           
                <div>
                    <ul>
                        <li>Ingredient 1</li>
                        <li>Ingredient 2</li>
                        <li>Ingredient 3</li>
                        <li>Ingredient 4</li>
                        <li>Ingredient 5</li>
                    </ul>
                </div>
            </div>
            <div className="recipe-title">            
                    <h3 className='title'>Instructions : </h3> 
                    <hr className='solid' />            
                <div>
                    <h5>You can find all the instructions here: </h5>
                </div>
            </div>
        </div>        
        
        </>
        
       
    )
}
function NutritionInfo() {
    return (
        <>
        <h2>Nutritions Facts : </h2>
            <div >
                <ul>
                        <li>Ingredient 1</li>
                        <li>Ingredient 2</li>
                        <li>Ingredient 3</li>
                        <li>Ingredient 4</li>
                        <li>Ingredient 5</li>
                    </ul>
            </div>
        </>
    )
}


export default function RecipeView() {
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

    if(windowWidth >=728)
        return (
            <div className="recipe-container-desktop">
                <ShowRecipeInfo></ShowRecipeInfo>
                <div className="nutrition-info">
                    <NutritionInfo></NutritionInfo>
                </div>
            </div>
        )
    else return(
        <div className="recipe-container-mobile">
                <ShowRecipeInfo></ShowRecipeInfo>
                 <div className="nutrition-info-mobile">
                    <NutritionInfo></NutritionInfo>
                </div>
            </div>
    )
}