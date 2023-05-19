import './RecipesContainer.css'
import RecipeCard from "./RecipeCard";
import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';



const RecipesContainer = ({data, total}) => {
  
  const [sortType, setSortType] = useState("");
  const [state,setState] = useState([]);
  const [isSorted,setIsSorded] = useState(false) 

  useEffect(() => {
    UpdateRecipes(sortType);
  },[sortType])

 

  const UpdateRecipes = (type) => { 
    let sorted;
    switch(type) {
      case 'title1':
         sorted = [...data.results].sort((a,b) => a.title < b.title? -1:1);
        setState(sorted);
        setIsSorded(true);
        break;
      case 'title2':
        sorted = [...data.results].sort((a,b) => a.title < b.title? 1:-1);
        setState(sorted);
        setIsSorded(true);
        break;
      case 'time1':
        sorted = [...data.results].sort((a,b) => a.readyInMinutes < b.readyInMinutes? -1:1);
        setState(sorted);
        setIsSorded(true);
        break;
      case 'time2':
        sorted = [...data.results].sort((a,b) => a.readyInMinutes < b.readyInMinutes? 1:-1);
        setState(sorted);
        setIsSorded(true);
        break;
    }
    } 
  


  const sortMenu = () => {
    return (
    <div className='sortMenu'>
      <p className='sortBy'>Sort By</p>
      <select defaultValue={'none'} className='select' 
        onChange={(e) => setSortType(e.target.value)}>
          <option value="none" disabled>None</option>
          <option value="title1">Title Ascending</option>
          <option value="title2">Title Descending</option>
          <option value="time1">Time Ascending</option>
          <option value="time2">Time Descending</option>
      </select>      
    </div>
    )
  }
  

  
  return (
    data?
    <>
      <h1 className='total-result'><i className='total-number'>{data.totalResults}</i>{total > 0 ? ` recipes found` : ""}</h1>      
      {total > 0? 
        sortMenu() 
        : ""}
      <section className="recipe-card-container">                    
       {isSorted ? state.map(recipe => (       
        <RecipeCard recipe={recipe} key={recipe.id} />    
      )) : data?.map(recipe => (       
        <RecipeCard recipe={recipe} key={recipe.id} />    
      ))} 

    </section>
    </> : <ClipLoader className='search-loader' />
  );
};
        

export default RecipesContainer;
      