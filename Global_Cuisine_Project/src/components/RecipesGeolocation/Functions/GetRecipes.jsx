async function GetRecipes(region) {
    const tempApiKey = "5303c07f7ada44cfb627489c597befb7"
    let recipes
    let loading = true
        try {
          const check = sessionStorage.getItem('recipesGeo');
        if(check){
            recipes = JSON.parse(check)
            console.log("no fetch needed")
            loading = false
        }
        else {
          console.log("fetched data")
          const dataRec = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${tempApiKey}&cuisine=${region}&&addRecipeInformation=true&addRecipeNutritionaddRecipeNutrition=true&number=50`);
          recipes = await dataRec.json();
        //   console.log(recipes)
          sessionStorage.setItem('recipesGeo', JSON.stringify(recipes))
            loading = false
        }
        } catch (error) {
            console.log(error);
        }
          
         
        

      
      
  
        
  return (
    [recipes, loading]
  )
}

export default GetRecipes