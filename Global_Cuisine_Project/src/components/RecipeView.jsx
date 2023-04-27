
import './RecipeView.css'
import recipeImage from '../assets/brooke.jpg'
import { useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react';

function ShowRecipeInfo(props) {

    const location = useLocation();
    const data = location.state.recipe;
    console.log(data)
    // const [recipe,setRecipe] = useState();
    // const getRecipes = async () => {
    // const apiKey = 'f27d562bd85b4cd5a482eb0b9108beeb';
    // try {
    //     const url = `https://api.spoonacular.com/recipes/${data}/information?apiKey=${apiKey}`;
    //     const response = await fetch(url);
    //     const result = await response.json();               
    //     setRecipe(result);
    //     console.log(result);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }
    // useEffect(() => {
    //     getRecipes();
    // },[])
    
    return (  
       <>
        <div className='recipe-info'>        
            <div className="recipe-title">
                <h2>{data.title}</h2>  
                </div>          
                <div className='recipe-title'>
                    <img src={data.image} alt="recipe image" 
                    className='recipe-img' ></img>
                </div>
            
            <div className="recipe-ingredients"> 
                <div className='ingredients'>           
                    <h3 className='title'>Ingredients : </h3> 
                    <hr className='solid' />           
                <div>
                    <ul className='list'>
                        {data.extendedIngredients.map((ingredient) =>
                            <li className='list-element'>{ingredient.original}</li>
                        )}                        
                    </ul>
                    </div>
                    </div>
                <div className='instructions' >            
                    <h3 className='title'>Instructions : </h3> 
                    <hr className='solid' />            
                <div>
                    <ol className='list2'>
                        {data.analyzedInstructions.map((instruction,index) => {
                            return <div key={index} >
                                {instruction.steps.map((step) => <li key={step.number}>
                                    <span className='step'>{step.step}</span></li>)}
                            </div>
                            
                           } 
                        )}                        
                    </ol>
                </div>
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